import _ from 'lodash'

const TYPE = {
    PAGE: 'PAGE',
    CONTAINER: 'CONTAINER',
    GROUP: 'GROUP',
    TEXT: 'TEXT'
}

export default class Tree {

    constructor (tree) {

        this.elements = []

        if (tree) {
            if (tree.elements) for (const page of tree.elements) {
                this.elements.push(new Page(page))
            }
        }

    }

    get TYPE () {
        return TYPE
    }

    createPage (title) {
        const index = this.elements.length.toString() + '-'
        const page = new Page({ title, path: index })
        this.elements.push(page)
        return page
    }

    find (path) {
        
        if (!path || !path.length) throw new Error('Path must be specified')

        const [ page, children ] = path.split('-')

        if (children?.length) return _.get(this.elements[page], children.split('/').filter(child => child.length).map(child => `children[${child}]`).join('.'))
        else return this.elements[page]
    }

    createContainer (title) {
        return new Container({ title })
    }

    createGroup (title) {
        return new Group({ title })
    }

    createText (title) {
        return new Text({ title })
    }

}

class TreeItem {

    constructor ({ title, path, type, children }) {
        
        this.path = path // page-child1/child2/
        this.children = children || []

        this.title = title || type.toLowerCase()
        this.type = type

    }

    add (child) {

        const index = this.children.length.toString() + '/'
        child.path = this.path + index
        this.children.push(child)
        
    }

}

class Page extends TreeItem {

    constructor (page) {

        const type = TYPE.PAGE
        const { title, path } = page
        
        super({ title, path, type })

        if (page) {
            if (page.children) for (const container of page.children) this.children.push(new Container(container))            
        }

    }

}

class Container extends TreeItem {

    constructor (container) {

        const type = TYPE.CONTAINER
        const { title, path } = container

        super({ title, path, type })

        if (container) {
            
            if (container.children) for (const child of container.children) {

                if (child.type === TYPE.GROUP) this.children.push(new Group(child))
                else if (child.type === TYPE.TEXT) this.children.push(new Text(child))

            }
        }

    }
}

class Group extends TreeItem {

    constructor (group) {

        const type = TYPE.GROUP
        const { title, path } = group

        super({ title, path, type })

        if (group) {
            
            if (group.children) for (const child of group.children) {

                if (child.type === TYPE.GROUP) this.children.push(new Group(child))
                else if (child.type === TYPE.TEXT) this.children.push(new Text(child))
                
            }
        }

    }
}

class Text extends TreeItem {

    constructor (text) {

        const type = TYPE.TEXT
        const { title, path } = text

        super({ title, path, type })

    }
}
