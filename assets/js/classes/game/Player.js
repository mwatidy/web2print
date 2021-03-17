export default class Player {

    constructor () {
        
        this.name = ''
        this.color = ''
        this.moves = []

    }

    makeMove (move) {
        // validate if move can be played then add to moves
        this.moves.push(move)
    }

    


}