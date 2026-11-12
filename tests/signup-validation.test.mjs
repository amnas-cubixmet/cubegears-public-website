import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const signupForm = readFileSync(new URL('../app/signup/signup-form.tsx', import.meta.url), 'utf8');
const api = readFileSync(new URL('../lib/api.ts', import.meta.url), 'utf8');
const signupProxy = readFileSync(new URL('../app/api/signup/route.ts', import.meta.url), 'utf8');

test('signup validates country-specific mobile length before submitting', () => {
  assert.match(signupForm, /localMobile\.length !== selectedCountry\.digits/);
  assert.match(signupForm, /countryCode:\s*["']\+91["']/);
  assert.match(signupForm, /aria-label="Country calling code"/);
  assert.match(signupForm, /autoComplete="tel-national"/);
});

test('Django duplicate mobile error is preserved for inline form feedback', () => {
  assert.match(api, /export class SignupApiError extends Error/);
  assert.match(api, /fieldErrors:\s*\{ mobile\?: string \}/);
  assert.match(api, /\(data as Record<string, unknown>\)\.mobile/);
  assert.match(signupForm, /err instanceof SignupApiError && err\.fieldErrors\.mobile/);
  assert.match(signupForm, /setMobileError\(err\.fieldErrors\.mobile\)/);
  assert.match(signupForm, /id="signup-mobile-error" role="alert"/);
  assert.match(signupForm, /aria-invalid=\{Boolean\(mobileError\)\}/);
});

test('signup keeps the real backend error response and does not retry registration', () => {
  assert.match(signupProxy, /if \(response\.ok\) return NextResponse\.json\(data, \{ status: response\.status \}\)/);
  assert.match(signupProxy, /return NextResponse\.json\(data, \{ status: response\.status \}\)/);
  assert.match(signupProxy, /cache: "no-store"/);
  assert.match(signupProxy, /Do not retry a POST/);
});
