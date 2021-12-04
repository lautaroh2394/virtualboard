import { Frames } from '../models/Frames.js'
import { CurrentFrameView } from './CurrentFrameView.js'
import { DefaultButtonsViewFactory } from '../factories/DefaultButtonsViewFactory.js'

class VirtualBoardView extends Backbone.View {
    preinitialize(){
        this.className = 'board-view'
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Frames)
    }

    initialize(opts){
        // Receives a Frames model in the opts.model key. Sets automatically to this.model due to Backbone

        if (this.invalid(opts)) throw new Error("Board Model required to instanciate VirtualBoardView");
        const buttonsViewFactory = new DefaultButtonsViewFactory(this)
        this.buttonsView = buttonsViewFactory.build()
        this.CurrentFrameView = new CurrentFrameView({ board: this.model.getCurrentFrame() })
        this.on('AddPawn', this.triggerAddPawn)
        Backbone.on("Frame:Render", this.render, this)
    }

    log(...args){
        console.log('VirtualBoardView - event catched', args)
    }

    triggerAddPawn(){
        this.log()    
        this.model.trigger('AddPawn')
    }

    render(){
        this.$el.html('')
        this.el.append(this.buttonsView.render().el)
        this.el.append(this.CurrentFrameView.render().el)
        return this
    }
}

export { VirtualBoardView }