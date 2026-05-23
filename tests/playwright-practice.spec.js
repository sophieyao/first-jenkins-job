import { test } from "@playwright/test";

test("", async ({ page }) => {
  // navigate to google.com
  await page.goto("https://google.com");

  await page.waitForTimeout(5000); // await must be used with an async function
});
