
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


export default class Validation {
    constructor(validations) {
        this.validations = validations || {}
    }

    get types () {
        return {
            EMAIL: { type: 'EMAIL', validation: () => true },
            NUMBER: { type: 'NUMBER', validation: () => true },
            STRING: { type: 'STRING', validation: () => true },
            TELEPHONE: { type: 'TELEPHONE', validation: () => true },
            WEBSITE: { type: 'WEBSITE', validation: () => true },
            DATE: { type: 'DATE', validation: () => true },
            REGEX: { type: 'REGEX', validation: () => true }
        }
    }

    addValidation(type) {
        this.validations[type] = this.types[type]
    }

    removeValidation(type) {
        delete this.validations[type]
    }

}