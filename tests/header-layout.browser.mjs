import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';

const port = 3070;
const site = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', String(port)], {
  stdio: 'inherit',
});

async function waitForSite() {
  for (let attempt = 0; attempt < 50 && server.exitCode === null; attempt++) {
    const response = await fetch(site).catch(() => null);
    if (response?.ok) return;
    await delay(200);
  }
  throw new Error('Public Website did not start for the header check.');
}

async function checkHeader(page, path, width) {
  await page.setViewportSize({ width, height: 800 });
  await page.goto(site + path);
  await page.evaluate(() => document.fonts.ready);
  const header = page.locator('.site-header');
  const message = `${path} at ${width}px`;
  const actionLabel = path === '/signup' ? 'Sign in' : width < 300 ? 'Start' : 'Get started';
  const action = header.getByRole('link', { name: actionLabel, exact: true });
  assert.ok(await action.isVisible(), message);
  const layout = await header.evaluate(root => {
    const brand = root.querySelector('.brand-link');
    const controls = root.querySelector('.site-header-actions');
    const links = [...root.querySelectorAll('.site-header-row a, .site-header-row button')];
    const visible = links.filter(link => link.getClientRects().length);
    const mark = brand.querySelector('.brand-name');
    return {
      fullyInViewport: visible.every(link => {
        const rect = link.getBoundingClientRect();
        return rect.left >= 0 && rect.right <= innerWidth;
      }),
      brandTextOverflow: Math.max(0, mark.scrollWidth - mark.clientWidth - 1),
      separate: brand.getBoundingClientRect().right <= controls.getBoundingClientRect().left,
    };
  });
  assert.deepEqual(layout, { fullyInViewport: true, brandTextOverflow: 0, separate: true }, message);
  const menu = header.getByRole('button', { name: 'Open navigation menu' });
  assert.equal(await menu.isVisible(), width < 1280, message);
  if (width >= 1280) assert.ok(await header.getByRole('navigation', { name: 'Primary navigation' }).isVisible(), message);
}

let browser;
try {
  await waitForSite();
  browser = await chromium.launch();
  const page = await browser.newPage();
  for (const path of ['/', '/features', '/how-it-works', '/for-workshops', '/pricing', '/contact', '/signup', '/signup/success', '/missing-page']) {
    await checkHeader(page, path, 310);
  }
  for (const width of [280, 320, 390, 640, 767, 768, 1440]) {
    await checkHeader(page, '/', width);
    await checkHeader(page, '/signup', width);
  }
  await checkHeader(page, '/', 310);
  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const navigation = page.getByRole('navigation', { name: 'Mobile navigation' });
  await navigation.waitFor({ state: 'visible' });
  await navigation.getByRole('link', { name: 'Pricing', exact: true }).waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await navigation.waitFor({ state: 'hidden' });
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  console.log('Header fits all nine public pages at 310px and both header actions from 280px to desktop.');
} finally {
  await browser?.close();
  server.kill();
}
