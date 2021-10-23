import {Board} from '../models/Board.js'
import {ButtonView} from '../views/ButtonView.js'
import {CanvasView} from '../views/CanvasView.js'
import {PawnView} from '../views/PawnView.js'

class BoardView extends Backbone.View {
    preinitialize(){
        this.className= '.board'
    }

    template(){
        return _.template('<div class="board" draggable="true">    \
            <% children.map(child => child.$el.html()).join() %> \
        </div>')
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Board)
    }

    initialize(opts){
        if (this.invalid(opts)) throw new Error("Board Model required to instanciate BoardView");
        this.buttonView = new ButtonView()
        this.canvasView = new CanvasView()
    }

    render(){        
        this.el.append(this.buttonView.render().el)
        this.el.append(this.canvasView.render().el)
        this.model.pawns()
                .map(child => new PawnView({ model: child }))
                .map( pawnView => this.el.append(pawnView.render().el))
        
        return this
    }
}

export { BoardView }