import { shallowMount, createLocalVue } from '@vue/test-utils'
import Ferry from '@/components/Ferry'

const localVue = createLocalVue()

describe('Ferry', () => {
    let state

    const build = () => {
        const wrapper = shallowMount(Ferry, {
            localVue
        })

        return {
            wrapper
        }
    }

    it('initial state', () => {
        // arrange
        const { wrapper } = build()
        // assert
        expect(wrapper.html()).toContain('Corn Relocation And Pricing')
    })

})
