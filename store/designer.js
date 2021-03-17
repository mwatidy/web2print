export const state = () => ({
    active_section: 'Assets'
})

export const mutations = {
    update_section (state, section) {
        state.active_section = section
    }
}