
import Container from './Container'

export default class Page {
    constructor(page = {}) {

        if(!page.index) throw 'Must add page index when creating new page'
        
        this.index = page.index

        this.name = page.name
        this.template_page = page.template_page
        
        this.containers_index = page.containers_index || 0
        this.containers = page.containers && page.containers.map(container => new Container(container)) || []

    }


    addContainer(container) {
        this.containers.push(new Container({ ...container, index: this.containers_index++ }))
    }



}