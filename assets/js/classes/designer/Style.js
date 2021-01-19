
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


export default class Style {
    constructor(style) {

        this.fontFamily = style.fontFamily || 'Arial'
        this.fontSize = style.fontSize  || '14px'
        this.color = style.color || '#000'
        this.textAlign = style.textAlign || 'left'
        this.wordWrap = style.wordWrap || 'auto'
        this.minWidth = style.minWidth || '50px'
        this.maxWidth = style.maxWidth || '150px'
        this.margin = style.margin || '10px'
        this.overflow = style.overflow || 'hidden'
        
    }
}