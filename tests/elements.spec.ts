import { test, expect } from "@playwright/test";

test("Text Box Element", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.fill("id=userName", "Test User");
  await page.fill("id=userEmail", "test@test.com");
  await page.fill("id=currentAddress", "4632 Hall Valley Drive");
  await page.fill("id=permanentAddress", "4404 White Oak Drive");
  await page.click("id=submit");
  await page.click("id=close-fixedban");
  await expect(page.locator('text=Name:Test User')).toBeVisible();
  await expect(page.locator('text=Email:test@test.com')).toBeVisible();
  await expect(page.locator('text=Current Address :4632 Hall Valley Drive')).toBeVisible();
  await expect(page.locator('text=Permananet Address :4404 White Oak Drive')).toBeVisible();
});

test("Check Box", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.click("text = Check Box");
  await page.click('[aria-label="Toggle"]');
  await page.click(':nth-match([aria-label="Toggle"], 3)');
  await page.click('text=WorkSpaceOffice >> [aria-label="Toggle"]');
  await page.click("text=Angular");
  await page.click("text=Downloads");
  await expect(page.locator(".text-success >> nth=0")).toHaveText("angular");
  await expect(page.locator(".text-success >> nth=1")).toHaveText("downloads");
  await expect(page.locator(".text-success >> nth=2")).toHaveText("wordFile");
  await expect(page.locator(".text-success >> nth=3")).toHaveText("excelFile");
});

test("Radio Button", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.click("text=Radio Button");
  await page.click('text=Yes');
  await expect(page.locator(".text-success")).toHaveText("Yes");
  await page.click('text=Impressive');
  await expect(page.locator(".text-success")).toHaveText("Impressive");
  await expect(page.locator('id=noRadio')).toBeDisabled();
  await page.close();
});

