
/*


Align - (top - )
Vertical Align - (top - bottom - center - )

*/

import Group from "./Group"
import Text from "./Text"

class ContainerElement {
    constructor(element) {

        //common attributes for Groups and Inputs
        if(!element.index) throw 'Container element must have an index'
        
        this.type = element.type
        this.index = element.index


    }
}


export default class Container {

    constructor(container = {}) {

        this.index = container.index

        this.position = container.position || { x: undefined, y: undefined }
        this.width = container.width || { max: undefined, min: undefined }
        this.height = container.height || { max: undefined, min: undefined }

        this.justify = container.justify || 'flex-start'
        this.align = container.align || 'flex-start'

        this.overflow = container.overflow || 'visible'

        this.elements_index = conatiner.elements_index || 0
        this.elements = container.elements && container.elements.map(element => new Container.Elements[element.type](element)) || []


    }

    static get Element () {
        return ContainerElement
    }

    static get Elements () {
        return {
            GROUP: Group,
            TEXT: Text
        }
    }

    addElement(element) {
        this.elements.push(new Container.Elements[element.type]({ ...element, index: this.elements_index++ }))
    }

}