import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("header routes are separate pages, including Home", () => {
  const header = read("components/PublicHeader.tsx");
  for (const route of ["/", "/features", "/how-it-works", "/for-workshops", "/pricing", "/contact"]) {
    assert.ok(header.includes('href: "' + route + '"'), "Missing route " + route);
  }
  assert.match(header, /aria-current/);
  assert.match(header, /aria-expanded/);
  assert.match(header, /onClick=\{closeMenu\}/);
});

test("layout resets scroll when the pathname changes", () => {
  const layout = read("app/layout.tsx");
  const manager = read("components/RouteScrollManager.tsx");
  assert.match(layout, /<RouteScrollManager\s*\/>/);
  assert.match(manager, /usePathname\(\)/);
  assert.match(manager, /window\.scrollTo/);
  assert.match(manager, /window\.location\.hash/);
});

test("signup pages use the same responsive site navigation", () => {
  for (const route of ["app/signup/page.tsx", "app/signup/success/page.tsx"]) {
    const content = read(route);
    assert.match(content, /<PublicHeader\s*\/>/);
    assert.match(content, /<PublicFooter\s*\/>/);
  }
});

test("mobile layout provides a navigable panel, and avoids smooth auto top scroll", () => {
  const css = read("app/globals.css");
  assert.match(css, /site-mobile-panel/);
  assert.match(css, /max-height:\s*calc\(100dvh\s*-\s*76px\)/);
  assert.match(css, /scroll-behavior:\s*auto/);
});
