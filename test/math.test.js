import { test } from "node:test";
import assert from "node:assert/strict";
import { multiplica } from "../src/math.js";

test("multiplica", () => {
  assert.equal(multiplica(3, 4), 12);
});
