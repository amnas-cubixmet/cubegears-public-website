import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const signup = readFileSync(new URL("../app/signup/page.tsx", import.meta.url), "utf8");
const form = readFileSync(new URL("../app/signup/signup-form.tsx", import.meta.url), "utf8");
const env = readFileSync(new URL("../.env.example", import.meta.url), "utf8");

test("signup hides Sign in without a live Company Panel URL", () => {
  assert.match(signup, /Already have a workshop account\?/);
  assert.match(signup, /process\.env\.COMPANY_PANEL_LOGIN_URL/);
  assert.match(signup, /href=\{signInUrl\}/);
  assert.match(signup, /\{signInUrl \? \(/);
  assert.match(signup, /if \(!configured\) return null;/);
  assert.match(signup, /Sign in\s*<\/a>/);
  assert.match(signup, /new URL\(configured\)/);
  assert.match(signup, /url\.protocol === "https:"/);
  assert.match(env, /COMPANY_PANEL_LOGIN_URL=https:\/\//);
  assert.doesNotMatch(signup, /cubegears-company-panel-three\.vercel\.app\/login/);
  assert.ok(signup.indexOf("Already have a workshop account?") > signup.indexOf("<SignupForm />"));
  assert.doesNotMatch(signup, /bg-blue-50\/70 px-4 py-3/);
  assert.doesNotMatch(signup, /→/);
  assert.match(signup, /Learn how it works/);
});

test("signup form and registration submission are retained", () => {
  assert.match(signup, /<SignupForm \/>/);
  assert.match(form, /await createWorkshopAccount\(/);
  assert.match(form, /router\.push\("\/signup\/success"\)/);
});
