import Page from "./Page"

class TemplatePage {
    constructor({ pdf_page, photo }) {

        this.pdf_design_page = pdf_design_page
        this.photo = photo

    }
}


const asset_types = {
    FONT: 'FONT',
    COLOR: 'COLOR'
}

class Asset {
    constructor(asset) {

        this.type = asset.type
        this.data = asset.data
        
    }
}

export default class Template {
    constructor(template = {}) {

        this.name = template.name
        
        this.pdf_original = template.pdf_original
        this.pdf_design = template.pdf_design
        this.pdf_text = template.pdf_text
        this.template_pages = template.template_pages && template.template_pages.map(page => new TemplatePage(page)) || []
        
        this.pages_index = template.pages_index || 0
        this.pages = template.pages && template.pages.map(page => new Page(page)) || []
        this.assets = template.assets && template.assets.map(asset => new Asset(asset)) || []
        
        this.selected_element = undefined

    }

    get lastPageIndex () {
        return this.pages.length - 1
    }

    get lastPage () {
        return this.pages[this.lastPageIndex]
    }

    createTemplate() {
        
        if(this.pdf_design && this.pdf_text && this.template_pages.length) throw 'Template was created earlier'
        if(!this.name || !this.pdf_original) throw 'Must have name and original_pdf file to create template'

        //Upload Template
        //create template pages
        //extract text
        //create initial pages

    }



    addPage(page) {
        this.pages.push(new Page({
            ...page,
            index: this.pages_index++
        }))
    }

    changePageIndex(page, newIndex) {

    }

    addAsset(asset) {
        this.assets.push(new Asset(asset))
    }

    get fonts() {
        return this.assets.filter(asset => asset.type == 'FONT')
    }

    get colors() {
        return this.assets.filter(asset => asset.type == 'COLOR')
    }

    selectElement(path) {

        // page/container/group(n)/element

        // let elements = path.split('/')
        // let item = undefined

        // for(const element of elements) {

        //     element.getChild(element)

        // }

    }

}