import pages from '~/assets/dummydata/page'
import _ from 'lodash'

export const state = () => ({
    activeSection: 'Design',
    activeItem: pages[0],
    pages: pages,
})

export const getters = {
    activeItem: state => state.activeItem
}

export const mutations = {

    update_pages (pages) {
        state.pages = pages
    },

    update_child (state, { key, value, property, item }) {

        const child = item ? item : state.activeItem

        let pageIndex = child.page
        let childIndex = (child.path ? 'children[' + child.path.split('/').join('].children[') + '].' : '') 
        
        if (key) childIndex += `${property}[${key}]`
        else childIndex += property

        _.update(state.pages[pageIndex], childIndex, _ => value)

    },

    update_section (state, section) {
        state.activeSection = section
    },

    update_active (state, item) {
        state.activeItem = item
    }
}