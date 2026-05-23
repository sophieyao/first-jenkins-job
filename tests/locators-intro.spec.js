import { test } from "@playwright/test";

test("Locators intro", async ({ page }) => {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000); // await must be used with an async function
  let searchBox = page.locator("//textarea[@id='APjFqb' and @name='q']");
  searchBox.fill("cydeo");
  await page.waitForTimeout(5000);
  await searchBox.press("Enter");
  await page.waitForTimeout(5000);
});
