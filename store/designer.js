export const state = () => ({
    activeSection: 'Design',
    activeItem: {
        title: 'Some Group',
        type: 'GROUP'
    },
    pages: [{"title":"page 1","type":"PAGE","children":[{"title":"container 1","type":"CONTAINER"},{"title":"container 2","type":"CONTAINER","children":[{"title":"group 1","type":"GROUP","children":[{"title":"SubGroup","type":"GROUP","children":[{"title":"subtext","type":"TEXT"}]}]},{"title":"group 2","type":"GROUP","children":[{"title":"subcontent 4 and some more info","type":"TEXT"}]}]},{"title":"container 2","type":"CONTAINER"}]},{"title":"page 2","type":"PAGE"}],
    
})

export const mutations = {
    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItem = item
    }
}