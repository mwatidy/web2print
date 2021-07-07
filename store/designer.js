import pages from '~/assets/dummydata/page'
import _ from 'lodash'
import { arrayBufferToBase64, base64ToArrayBuffer } from '~/assets/js/file_handlers'

import Tree from '~/assets/js/Tree'

// const ttree = new Tree({ elements: pages })

// const tree = new Tree(JSON.parse(JSON.stringify(ttree)))
// console.log(tree)

export const state = () => ({
    refresh: false,
    activeSection: 'Design',
    activeItem: pages[0],
    activeItemPath: null,
    activePage: 0,
    pages: pages,
    assetsLoaded: false,
    fonts: [],
    colors: [],
    styles: [],
})

export const getters = {
    activeItem: state => {

        const path = state.activeItemPath
        const page = state.activePage

        if (page) {

            if (!path) state.pages[page]

            

        } else {
            return null
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
    
    update_pages (state, pages) {
        state.pages = pages
    },

    update_child (state, { key, value, property, item }) {

        const child = item ? item : state.activeItem

        let pageIndex = child.page
        let childIndex = (child.path ? 'children[' + child.path.split('/').join('].children[') + ']' : '') 
        
        let childProperty
        if (key) childProperty = childIndex + `.${property}[${key}]`
        else childProperty = childIndex + `.${property}`

        _.update(state.pages[pageIndex], childProperty, _ => value)
        const element = _.get(state.pages[pageIndex], childIndex)
        
        state.refresh = !state.refresh
        state.activeItem = element

        console.log(element)
        
    },

    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItem = item
    }
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
    }

}