import {Board} from '../models/Board.js'
import {CanvasView} from '../views/CanvasView.js'
import {PawnView} from '../views/PawnView.js'
import { DefaultButtonsViewFactory } from '../factories/DefaultButtonsViewFactory.js'

class BoardView extends Backbone.View {
    preinitialize(){
        this.className= 'board'
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Board)
    }

    initialize(opts){
        if (this.invalid(opts)) throw new Error("Board Model required to instanciate BoardView");
        const buttonsViewFactory = new DefaultButtonsViewFactory()
        this.buttonsView = buttonsViewFactory.build()
        this.canvasView = new CanvasView({board: this.model})
    }

    render(){        
        this.el.append(this.buttonsView.render().el)
        this.el.append(this.canvasView.render().el)
        this.model.pawns()
                .map(child => new PawnView({ model: child }))
                .map( pawnView => this.el.append(pawnView.render().el))
        
        return this
    }
}

export { BoardView }