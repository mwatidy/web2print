import pages from '~/assets/dummydata/page'

export const state = () => ({
    activeSection: 'Design',
    activeItem: pages[0],
    pages: pages,
})

export const mutations = {

    update_pages (pages) {
        state.pages = pages
    },

    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItem = item
    }
}