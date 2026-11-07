import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const css = read("app/globals.css");
const photos = read("components/WorkshopPhoto.tsx");
const home = read("app/page.tsx");
const signup = read("app/signup/page.tsx");
const form = read("app/signup/signup-form.tsx");

test("premium car-bike theme applies consistently across all public routes", () => {
  assert.match(css, /--brand:\s*#ce1b2a/);
  assert.match(css, /site-mobile-panel/);
  assert.match(css, /max-height:\s*calc\(100dvh\s*-\s*76px\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /animation:\s*premium-enter/);
  for (const path of [
    "app/page.tsx",
    "app/features/page.tsx",
    "app/how-it-works/page.tsx",
    "app/for-workshops/page.tsx",
    "app/pricing/page.tsx",
    "app/contact/page.tsx",
    "app/signup/page.tsx",
    "app/signup/success/page.tsx",
  ]) {
    const page = read(path);
    assert.match(page, /<PublicHeader\s*\/>/, "Header missing from " + path);
    assert.match(page, /<PublicFooter\s*\/>/, "Footer missing from " + path);
  }
});

test("real automotive and motorcycle photos are provided with descriptions", () => {
  assert.match(photos, /photos\/11890964\/pexels-photo-11890964/);
  assert.match(photos, /photos\/8550666\/pexels-photo-8550666/);
  assert.match(photos, /photos\/8985456\/pexels-photo-8985456/);
  assert.match(photos, /alt=\{asset\.alt\}/);
  assert.match(home, /photo="bike"/);
  assert.match(home, /photo="bikeTeam"/);
  assert.match(home, /photo="garage"/);
  assert.match(read("app/for-workshops/page.tsx"), /Motorcycle & scooter service/);
});

test("signup has two visual sections and retains the working validated API form", () => {
  assert.match(signup, /signup-grid/);
  assert.match(signup, /signup-story/);
  assert.match(signup, /signup-card/);
  assert.match(signup, /<SignupForm\s*\/>/);
  assert.match(signup, /Already have a workshop account\?/);
  assert.match(form, /createWorkshopAccount\(\{/);
  assert.match(form, /maxLength=\{selectedCountry\.digits\}/);
  assert.match(form, /selectedCountry\.digits/);
  assert.match(form, /whatsappConsent:\s*false/);
  assert.match(form, /router\.push\("\/signup\/success"\)/);
});
