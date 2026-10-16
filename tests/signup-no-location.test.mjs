import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const form = read("app/signup/signup-form.tsx");
const apiType = read("lib/api.ts");
const route = read("app/api/signup/route.ts");

test("public signup does not ask for country, state or city", () => {
  for (const field of ["country", "state", "city"]) {
    const fieldName = new RegExp(`\\b${field}\\b`, "i");
    assert.doesNotMatch(form, fieldName);
    assert.doesNotMatch(apiType, fieldName);
    assert.doesNotMatch(route, fieldName);
  }
});

test("signup still forwards the required workshop and owner details", () => {
  for (const field of ["workshopName", "ownerName", "mobile", "email"]) {
    assert.match(form, new RegExp(`\\b${field}: form\\.${field}\\.trim\\(\\)`));
    assert.match(route, new RegExp(`payload\\.${field}`));
  }
  for (const field of ["workshop_name", "owner_name", "mobile", "email"]) {
    assert.match(route, new RegExp(`\\b${field}:`));
  }
});
