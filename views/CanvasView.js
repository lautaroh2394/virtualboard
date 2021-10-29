import {PawnView} from '../views/PawnView.js'

class CanvasView extends Backbone.View {
    preinitialize(){
        this.className = 'canvas-view'
    }

    initialize(opts){
        this.board = opts.board
    }
    
    render(){
        this.$el.html('')
        this.board.pawns()
            .map( child => new PawnView({ model: child }))
            .map( pawnView => this.el.append(pawnView.render().el))   
        return this
    }
}

export { CanvasView }