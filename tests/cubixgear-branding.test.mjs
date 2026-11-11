import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

const brandingSources = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/features/page.tsx",
  "app/for-workshops/page.tsx",
  "app/how-it-works/page.tsx",
  "app/pricing/page.tsx",
  "app/contact/page.tsx",
  "app/signup/page.tsx",
  "app/signup/success/page.tsx",
  "app/not-found.tsx",
  "app/api/signup/route.ts",
  "components/Brand.tsx",
  "components/PublicFooter.tsx",
];

test("all public-facing product naming uses cubixgear, not the old brand", () => {
  for (const path of brandingSources) {
    assert.doesNotMatch(read(path), /CubixGears|CubeGears|CUBEGEARS/, path + " has an outdated product name");
  }
  assert.match(read("app/layout.tsx"), /applicationName: "cubixgear"/);
  assert.match(read("app/layout.tsx"), /siteName: "cubixgear"/);
  assert.match(read("app/signup/page.tsx"), /cubixgear workspace/);
  assert.match(read("components/PublicFooter.tsx"), /cubixgear\. All rights reserved/);
});

test("header and footer display the configured cubixgear PNG with no CG placeholder", () => {
  const brand = read("components/Brand.tsx");
  const header = read("components/PublicHeader.tsx");
  const footer = read("components/PublicFooter.tsx");
  const css = read("app/globals.css");
  assert.match(brand, /cubixgear — Home/);
  assert.match(brand, /cubix<span className="text-\[#2563eb\]">gear<\/span>/);
  assert.match(brand, /src="\/logo\/logo\.png"/);
  assert.match(read("app/layout.tsx"), /shortcut: "\/logo\/logo\.png"/);
  assert.match(css, /\.brand-image/);
  assert.doesNotMatch(brand, />CG<\/span>|brand-symbol/);
  assert.doesNotMatch(css, /\.brand-symbol(?:-inner)?\s*\{/);
  assert.match(header, /<Brand onNavigate=\{closeMenu\} \/>/);
  assert.match(footer, /<Brand light \/>/);
});

test("branding retains configurable sign-in and the working signup flow", () => {
  assert.match(read("app/signup/page.tsx"), /process\.env\.COMPANY_PANEL_LOGIN_URL/);
  assert.match(read("app/signup/page.tsx"), /if \(!configured\) return null;/);
  assert.match(read("app/signup/page.tsx"), /<SignupForm \/>/);
  assert.match(read("app/api/signup/route.ts"), /BACKEND_API_URL/);
});
