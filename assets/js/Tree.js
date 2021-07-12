import _ from 'lodash'
import tree from '~/assets/dummydata/page'

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

    findParent (element) {
        return this.find(element.parentPath())
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

    constructor ({ title, path, type, children, style }) {
        
        this.path = path // page-child1/child2/
        this.children = children || []

        this.title = title || type.toLowerCase()
        this.type = type

    }

    get isPage () {
        return this.type === TYPE.PAGE
    }

    get isContainer () {
        return this.type === TYPE.CONTAINER
    }

    get isGroup () {
        return this.type === TYPE.GROUP
    }

    get isText () {
        return this.type === TYPE.TEXT
    }



    parentPath () {

        const [ page, children ] = this.path.split('-')

        const paths = children.split('/')
        paths.pop()
        paths.pop()

        return page + '-' + paths.join('/') + '/' 

    }



    delete (tree) {

        const elementParent = tree.findParent(this)
        const elementIndex = elementParent.children.findIndex(el => el.path === this.path)
        elementParent.children.splice(elementIndex, 1)

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

    parentPath () {
        return null
    }

    parent () {
        return null
    }

    delete (tree) {

        const pageIndex = tree.elements.findIndex(page => page.path === this.path)
        tree.elements.splice(pageIndex, 1)

    }

    createDefaultChild () {
        return new Container('New Container')
    }





}

class Container extends TreeItem {

    constructor (container) {

        const type = TYPE.CONTAINER
        const { title, path, style } = container

        super({ title, path, type })
        this.style = style || {
            width: '200px',
            height: '100px',
            left: '100px',
            top: '100px',
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingRight: '0px',
            paddingLeft: '0px',
            justifyContent: 'start',
        }

        if (container) {
            
            if (container.children) for (const child of container.children) {

                if (child.type === TYPE.GROUP) this.children.push(new Group(child))
                else if (child.type === TYPE.TEXT) this.children.push(new Text(child))

            }
        }

    }

    parentPath () {
        const [ page ] = this.path.split('-')
        return page + '-'
    }

    createDefaultChild () {
        return new Group('New Group')
    }

    


    // add () {
        
    //     const child = new Group('New Group')
    //     super.add(child)

    // }

}

class Group extends TreeItem {

    constructor (group) {

        const type = TYPE.GROUP
        const { title, path, style, seperator, seperatorStyle } = group

        super({ title, path, type })

        this.seperator = seperator || null
        this.seperatorStyle = seperatorStyle || {
            font: null,
            size: null,
            color: null
        }

        this.style = style || {
            minWidth: undefined,
            maxWidth: undefined,
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingRight: '0px',
            paddingLeft: '0px',
            justifyContent: 'start',
        }

        if (group) {
            
            if (group.children) for (const child of group.children) {

                if (child.type === TYPE.GROUP) this.children.push(new Group(child))
                else if (child.type === TYPE.TEXT) this.children.push(new Text(child))
                
            }
        }

    }

    createDefaultChild () {
        return new Text('New Group')
    }


    // add () {
        
    //     const child = new Text('New Group')
    //     super.add(child)

    // }

}

class Text extends TreeItem {

    constructor (text) {

        const type = TYPE.TEXT
        const { title, path, style, canEdit, inputType, inputTitle, inputHelp, inputValue, inputSelections, textStyle, validationType } = text

        super({ title, path, type })
        this.canEdit = canEdit || 'yes'
        this.inputType = inputType || 'text'
        this.inputTitle = inputTitle || ''
        this.inputHelp = inputHelp || ''
        this.inputValue = inputValue || ''
        this.inputSelections = inputSelections || []
        this.validationType = validationType || null

        this.textStyle = textStyle || {
            font: null,
            size: null,
            color: null
        }

        this.style = style || {
            minWidth: undefined,
            maxWidth: undefined,
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingRight: '0px',
            paddingLeft: '0px',

            justifyContent: 'start',
        }

    }
}
