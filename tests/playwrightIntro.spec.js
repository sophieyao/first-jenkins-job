// const {test} = require("@playwright/test");//old way import
import { test } from "@playwright/test"; //new way import
test("", async ({ page }) => {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000); // await must be used with an async function
});
