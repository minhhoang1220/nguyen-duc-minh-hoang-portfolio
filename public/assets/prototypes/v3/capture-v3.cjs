// V3 Screenshot capture via Edge CDP — compatible with Edge 149+
const http = require('http');
const fs = require('fs');
const { spawn, execSync } = require('child_process');
const path = require('path');
const os = require('os');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 9334;

const jobs = [
  { url: 'file:///d:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/templates/hero-navy-v3.html', out: 'd:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/hero-command-center-navy-v3.png', w: 1400, h: 1000 },
  { url: 'file:///d:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/templates/case-study-01-v3-cover.html', out: 'd:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/case-study-01-v3-cover.png', w: 1400, h: 900 },
  { url: 'file:///d:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/templates/case-study-02-v3-cover.html', out: 'd:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/case-study-02-v3-cover.png', w: 1400, h: 900 },
  { url: 'file:///d:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/templates/case-study-03-v3-cover.html', out: 'd:/Users/Desktop/Work/CV/Portfolio/public/assets/prototypes/v3/case-study-03-v3-cover.png', w: 1400, h: 900 },
];

function httpReq(method, url) {
  return new Promise((ok, fail) => {
    const u = new URL(url);
    const req = http.request({ method, hostname: u.hostname, port: u.port, path: u.pathname + u.search }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { ok(JSON.parse(d)); } catch(e) { ok(d); } });
    });
    req.on('error', fail);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForDebugger(maxRetries = 20) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const data = await httpReq('GET', `http://127.0.0.1:${PORT}/json/version`);
      if (data && data.webSocketDebuggerUrl) return data;
    } catch(e) {}
    await sleep(1000);
  }
  throw new Error('Could not connect to Edge CDP');
}

async function getPageTarget() {
  const targets = await httpReq('GET', `http://127.0.0.1:${PORT}/json`);
  return targets.find(t => t.type === 'page');
}

function createCDP(wsUrl) {
  const url = new URL(wsUrl);
  const net = require('net');
  const crypto = require('crypto');

  return new Promise((resolve, reject) => {
    const sock = net.createConnection({ host: url.hostname, port: parseInt(url.port) }, () => {
      const key = crypto.randomBytes(16).toString('base64');
      sock.write(`GET ${url.pathname} HTTP/1.1\r\nHost: ${url.host}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\n\r\n`);
    });

    let headersDone = false, buf = Buffer.alloc(0), mid = 0;
    const waits = new Map();

    function send(method, params = {}) {
      return new Promise((res, rej) => {
        const id = ++mid;
        waits.set(id, { resolve: res, reject: rej });
        const msg = JSON.stringify({ id, method, params });
        const pl = Buffer.from(msg);
        const mk = crypto.randomBytes(4);
        let frame;
        if (pl.length < 126) {
          frame = Buffer.alloc(6 + pl.length);
          frame[0] = 0x81;
          frame[1] = 0x80 | pl.length;
          mk.copy(frame, 2);
          for (let i = 0; i < pl.length; i++) frame[6+i] = pl[i] ^ mk[i%4];
        } else if (pl.length < 65536) {
          frame = Buffer.alloc(8 + pl.length);
          frame[0] = 0x81;
          frame[1] = 0x80 | 126;
          frame.writeUInt16BE(pl.length, 2);
          mk.copy(frame, 4);
          for (let i = 0; i < pl.length; i++) frame[8+i] = pl[i] ^ mk[i%4];
        } else {
          frame = Buffer.alloc(14 + pl.length);
          frame[0] = 0x81;
          frame[1] = 0x80 | 127;
          frame.writeBigUInt64BE(BigInt(pl.length), 2);
          mk.copy(frame, 10);
          for (let i = 0; i < pl.length; i++) frame[14+i] = pl[i] ^ mk[i%4];
        }
        sock.write(frame);
      });
    }

    sock.on('data', data => {
      buf = Buffer.concat([buf, data]);
      if (!headersDone) {
        const idx = buf.indexOf('\r\n\r\n');
        if (idx >= 0) { headersDone = true; buf = buf.slice(idx+4); resolve({ send, close: () => sock.destroy() }); }
        return;
      }
      while (buf.length >= 2) {
        let plen = buf[1] & 0x7f, off = 2;
        const masked = !!(buf[1] & 0x80);
        if (plen === 126) { if (buf.length < 4) return; plen = buf.readUInt16BE(2); off = 4; }
        else if (plen === 127) { if (buf.length < 10) return; plen = Number(buf.readBigUInt64BE(2)); off = 10; }
        if (masked) off += 4;
        if (buf.length < off + plen) return;
        let payload = buf.slice(off, off + plen);
        if (masked) { const m = buf.slice(off-4, off); for (let i = 0; i < payload.length; i++) payload[i] ^= m[i%4]; }
        buf = buf.slice(off + plen);
        try {
          const msg = JSON.parse(payload.toString());
          if (msg.id && waits.has(msg.id)) { const w = waits.get(msg.id); waits.delete(msg.id); msg.error ? w.reject(new Error(msg.error.message)) : w.resolve(msg.result); }
        } catch(e) {}
      }
    });
    sock.on('error', reject);
    setTimeout(() => reject(new Error('WS timeout')), 15000);
  });
}

async function main() {
  try { execSync('taskkill /F /IM msedge.exe', { stdio: 'ignore' }); } catch(e) {}
  await sleep(2000);

  const userDataDir = path.join(os.tmpdir(), 'edge-cdp-v3-' + Date.now());
  console.log('Starting Edge headless...');
  
  const edge = spawn(EDGE, [
    `--remote-debugging-port=${PORT}`,
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--disable-background-networking',
    '--disable-sync',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    const ver = await waitForDebugger();
    console.log('Connected to Edge:', ver.Browser);

    // Get the existing about:blank page target
    const pageTarget = await getPageTarget();
    if (!pageTarget) throw new Error('No page target found');

    const cdp = await createCDP(pageTarget.webSocketDebuggerUrl);
    await cdp.send('Page.enable');

    for (const job of jobs) {
      console.log(`\nCapturing: ${path.basename(job.out)} (${job.w}x${job.h})`);

      // Set viewport
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: job.w, height: job.h,
        deviceScaleFactor: 1, mobile: false
      });

      // Navigate to the template
      await cdp.send('Page.navigate', { url: job.url });
      await sleep(3000); // Wait for full render

      // Screenshot
      const result = await cdp.send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: job.w, height: job.h, scale: 1 }
      });

      const imgBuf = Buffer.from(result.data, 'base64');
      fs.writeFileSync(job.out, imgBuf);
      console.log(`  OK: ${(imgBuf.length/1024).toFixed(0)} KB`);
    }

    cdp.close();
  } finally {
    try { edge.kill(); } catch(e) {}
    try { execSync('taskkill /F /IM msedge.exe', { stdio: 'ignore' }); } catch(e) {}
  }

  console.log('\n=== Results ===');
  for (const j of jobs) {
    const e = fs.existsSync(j.out);
    const s = e ? (fs.statSync(j.out).size/1024).toFixed(0) : 'N/A';
    console.log(`  ${path.basename(j.out)}: ${e ? s+' KB' : 'MISSING'}`);
  }
}

main().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
