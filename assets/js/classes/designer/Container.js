
/*


Align - (top - )
Vertical Align - (top - bottom - center - )

*/

class ContainerElement {
    constructor() {

        //common attributes for Groups and Inputs

    }
}


export default class Container {

    constructor(container) {

        this.index = page.index

        this.position = container.position || { x: undefined, y: undefined }
        this.width = container.width || { max: undefined, min: undefined }
        this.height = container.height || { max: undefined, min: undefined }

        this.justify = container.justify || 'flex-start'
        this.align = container.align || 'flex-start'

        this.overflow = container.overflow || 'visible'

        this.elements = container.elements.map(element => {
            
            // if(element.type == 'GROUP')



        }) || []


    }

    static get Element() {
        return ContainerElement
    }


}