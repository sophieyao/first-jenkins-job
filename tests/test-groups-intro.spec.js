import { test } from "@playwright/test";

test.describe("Group", () => {
  test.beforeAll(async () => {
    console.log("Before all is running");
  });

  test.afterAll(async () => {
    console.log("After all is running");
  });

  test.beforeEach(async () => {
    console.log("Before each is running");
  });
  test.afterEach(async () => {
    console.log("After each is running");
  });

  test("Test1", async () => {
    console.log("Test1 is running");
  });

  test("Test2", async () => {
    console.log("Test2 is running");
  });

  test("Test3", async () => {
    console.log("Test3 is running");
  });
});
