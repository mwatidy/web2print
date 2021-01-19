
/*

Name (for designer)
Input Field Label (for User)
Input Field Description (for User)
Input Field Default Value
Input type
Uneditable 

Styling
    Font Family
    Font Size
    Font Color
    Text Align
    Word wrap
    Min width
    Max width
    margin
    Overflow
    Format (Masking)

Validations  for user input 
    Email
    Number (between, min and max)
    String (min and max length)
    Telephone / Mobile ()
    Website
    Date
    Regex



Context Menu :-> Divide Input into group



*/

import Validation from "./Validation"
import Style from "./Style"
import Container from "./Container"

export default class Text extends Container.Element {
    constructor(text = {}) {

        super({ ...text, type: 'TEXT' })

        this.name = text.name
        this.label = text.label
        this.description = text.description
        this.default_value = text.default_value
        this.editable = text.editable
        
        this.format = text.format
        
        this.style = text.style || new Style()
        this.validation = text.validation || new Validation()
        
    }

}