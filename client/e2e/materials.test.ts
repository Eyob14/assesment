import { test, expect } from '@playwright/test'

test.describe('Material', () => {
  test.beforeEach(async ({ page }) => {
    // Given (ARRANGE)
    await page.goto('/login')
    const dashboardLink = page.getByRole('link', { name: 'Dashboard' })

    // When (ACT)
    const form = page.getByRole('form', { name: 'Login' })
    await form.locator('input[type="email"]').fill('admin@example.com')
    await form.locator('input[type="password"]').fill('admin123')
    await form.locator('button[type="submit"]').click()

    // Then (ASSERT)
    await expect(dashboardLink).toBeHidden()
  })

  test('Admin can see list of materials', async ({ page }) => {
    await page.goto('/dashboard/material')

    await expect(page.locator('#material-create-button')).toBeVisible()
  })

  test('Admin can see create material page', async ({ page }) => {
    await page.goto('/dashboard/create')

    await expect(page.locator('#cancel-button')).toBeVisible()
  })
})
