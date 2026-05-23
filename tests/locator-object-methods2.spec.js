import { test } from "@playwright/test";

test.describe("test group", () => {
  // cerate before each to navigate to https://the-internet-5chk.onrender.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });
  test("test case 1 - innterText(): retrieve visible text", async ({
    page,
  }) => {
    let headerElement = await page.locator(
      "//span[text()='Test Automation Practice']",
    );

    let actualText = await headerElement.innerText();
    console.log("Actual Text: " + actualText);
  });

  test("test case 2 - inputValue(): retrieve value of input field", async ({
    page,
  }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();
    await page.waitForTimeout(2000);

    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(2000);
    await inputBox.fill("12345");
    await page.waitForTimeout(2000);

    let actualValue = await inputBox.inputValue();
    console.log("Actual Value: " + actualValue);
  });
});
