
class Tree {

    constructor () {
        this.elements = []
    }

}

class TreeItem {

    constructor ({ path, type, children }) {
        
        this.path = path
        this.children = this.children || []

        this.title = type.toLowerCase()
        this.type = type



    }

}