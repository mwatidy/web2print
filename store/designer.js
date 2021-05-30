export const state = () => ({
    activeSection: 'Design',
    activeItem: {
        title: 'Some Group',
        type: 'GROUP'
    }
})

export const mutations = {
    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItem = item
    }
}