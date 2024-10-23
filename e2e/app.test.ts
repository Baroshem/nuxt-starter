import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { describe, expect, test } from "vitest";

const NUXT_TEXT = 'Welcome to Nuxt!'

describe('app', async () => {
  await setup()

  test(`it should have ${NUXT_TEXT} text in the body`, async () => {
    const html = await $fetch('/')

    expect(html).toContain(NUXT_TEXT)
  })
})
