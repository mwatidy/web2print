import pages from '~/assets/dummydata/page'
import _ from 'lodash'
import { arrayBufferToBase64, base64ToArrayBuffer } from '~/assets/js/file_handlers'

// import Tree from '~/assets/js/Tree'

/* 

    CONTINUE FROM HERE 
    
    --> CREATE SAMPLE TREE
    --> CHANGE STORE METHOD FOR ACTIVE CHILD
    --> CONTINUE CONTAINER, GROUP, TEXT CLASSES

*/

// window.tree = pages
// window.page = tree.elements[0]
// window.container = tree.elements[0].children[0]
// window.group = container.children[0]
// window.text = window.group.children[0]

export const state = () => ({
    activeSection: 'Design',
    activeItemPath: pages.elements[0].path,
    pages: pages.elements,
    tree: pages,
    assetsLoaded: false,
    fonts: [],
    colors: [],
    styles: [],
    settings: {
        margin: 'pt',
        font: 'pt'
    }
})

export const getters = {
    activeItem: state => {

        const path = state.activeItemPath
        const tree = state.tree
        
        try {

            const element = tree.find(path)
            return element

        } catch (e) {

            console.log(e)
            return {}
        }

    } 
}

export const mutations = {

    update_state (state, { key, value }) {
        state[key] = value
        if (['fonts','styles','colors'].indexOf(key) > -1) localStorage.setItem(key, JSON.stringify(state[key]))
    },

    push_to_state (state, { key, value }) {
        state[key].push(value)
        if (['fonts','styles','colors'].indexOf(key) > -1) localStorage.setItem(key, JSON.stringify(state[key]))
    },

    splice_from_state (state, { index, key, value }) {
        
        if (value) state[key].splice(index, 1, value)
        else  state[key].splice(index, 1)

        if (['fonts','styles','colors'].indexOf(key) > -1) localStorage.setItem(key, JSON.stringify(state[key]))
    },
    

    update_child (_, { child, key, property, value }) {

        if (key) child[property][key] = value
        else child[property] = value
        
    },

    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItemPath = item.path
    },

    add_item (state, { activeItem }) {

        let element
        if (activeItem) {
            element = activeItem.createDefaultChild()
            activeItem.add(element)
        }
        else element = state.tree.createPage('Page 1')
    },

    delete_item (state, activeItem) {
        state.activeItemPath = state.tree.elements[0].path
        activeItem.delete(state.tree)
        // state.tree.delete()
    },

}

export const actions = {

    async loadAssets ({ commit, dispatch }) {

        dispatch('loadAsset', 'fonts')
        dispatch('loadAsset', 'colors')
        dispatch('loadAsset', 'styles')
        commit('update_state', { key: 'assetsLoaded', value: true })

    },

    async loadAsset ({ state, commit }, key) {

        let data = JSON.parse(localStorage.getItem(key))
        if (!data) return null

        if (key === 'fonts') {
            const fonts = []
            
            for (const font of data) {

                try {

                    const arrayBuffer = await base64ToArrayBuffer(font.fontData)
                    const fontFace = new FontFace(font.name, arrayBuffer);
                    await fontFace.load();
                    document.fonts.add(fontFace);                    
                    fonts.push(font)

                } catch (e) {
                    console.error(e)
                    return
                }
            }

            commit('update_state', { key: 'fonts', value: fonts })

        } else {
            commit('update_state', { key, value: data })
        }

    },

    async saveAsset ({ state, commit }, { key, value }) {
        commit('update_state', { key, value })
    },

    async updateChild ({ state, getters, commit }, { key, value, property, item }) {

        const tree = state.tree
        const child = item ? tree.find(item.path) : getters.activeItem

        commit('update_child', { child, key, property, value })


    },

    addItem ({ getters, commit, state }) {

        const activeItem = getters.activeItem
        commit('add_item', { activeItem })

    },

    deleteItem ({ getters, commit }) {

        const activeItem = getters.activeItem
        commit('delete_item', activeItem)

    },

    updateSettings ({ commit }, settings) {
        commit('update_state', { key: "settings", value: settings })
    }

}