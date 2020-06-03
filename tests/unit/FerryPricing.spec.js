import { shallowMount, createLocalVue } from '@vue/test-utils'
import Ferry from '@/components/Ferry'

const localVue = createLocalVue()

describe('UserView', () => {
    let state

    const build = () => {
        const wrapper = shallowMount(Ferry, {
            localVue,
            propsData: {
                msg: 'Hello World'
            }
        })

        return {
            wrapper
        }
    }

    it('renders the component', () => {
        // arrange
        const { wrapper } = build()
        // assert
        expect(wrapper.html()).toContain('Hello World')
    })

})
