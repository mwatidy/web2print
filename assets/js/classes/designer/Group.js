
/*

Name (for designer)
Direction (vertical vs horizontal)
Space between elements 
Specific
Elements separator ( - , * )
Default Element settings
Elements (Texts ,..)

*/

import Container from "./Container"

export default class Group extends Container.Element {
    constructor(group = {}) {

        super({ ...group, type: 'GROUP' })

        this.elements_index = group.elements_index || 0
        this.elements = group.elements.map(element => new Container.Elements[element.type](element)) || []
        this.default_child_settings = group.default_child_settings

        this.name = group.name
        this.direction = group.direction || 'Horizontal'
        this.space_between = group.space_between || '1em'
        this.seperator = group.seperator 
        
        
    }

    addElement(element) {
        this.elements.push(new Container.Elements[element.type]({ ...element, index: this.elements_index++ }))
    }

}