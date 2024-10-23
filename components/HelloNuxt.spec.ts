import { describe, expect, it } from "vitest";
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HelloNuxt from './HelloNuxt.vue'

describe('HelloNuxt', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(HelloNuxt)
    expect(component.html()).toBeDefined()
  })

  it('contains p tag and text Hello Nuxt', async () => {
    const component = await mountSuspended(HelloNuxt)
    expect(component.html()).toBeDefined()
    expect(component.html()).toContain('p')
    expect(component.html()).toContain('Hello Nuxt')
  })
})
