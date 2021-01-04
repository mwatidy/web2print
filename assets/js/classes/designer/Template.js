import Page from "./Page"

class TemplatePage {
    constructor({ pdf_page, photo }) {
        this.pdf_page = pdf_page
        this.photo = photo_url
    }
}


const asset_types = {
    FONT: 'FONT',
    COLOR: 'COLOR'
}

class Asset {
    constructor(asset) {

        this.type = asset.type || undefined
        this.data = asset.data || {}
        
    }
}

export default class Template {
    constructor(template) {

        this.name = template.name
        this.original_pdf = template.original_pdf

        this.pdf_no_text = template.pdf_no_text
        this.text_layer = template.text_layer
        this.template_pages = template.template_pages.map(page => new TemplatePage(page)) || []

        this.pages = template.pages.map(page => new Page(page)) || []
        this.assets = template.assets.map(asset => new Asset(asset)) || []

        this.selected_element = undefined

    }

    createTemplate() {
        
        if(this.pdf_no_text && this.text_layer && this.template_pages) throw 'Template was created earlier'
        if(!this.name || !this.original_pdf) throw 'Must have name and original_pdf file to create template'

        //Upload Template 
        //create template pages
        //extract text
        //create initial pages

    }

    addPage(page) {
        this.pages.push(new Page(page))
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