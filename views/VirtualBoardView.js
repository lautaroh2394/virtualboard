import { Frame } from '../models/Frame.js'
import { CurrentFrameView } from './CurrentFrameView.js'
import { DefaultButtonsViewFactory } from '../factories/DefaultButtonsViewFactory.js'

class VirtualBoardView extends Backbone.View {
    preinitialize(){
        this.className = 'board-view'
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Frame)
    }

    initialize(opts){
        if (this.invalid(opts)) throw new Error("Board Model required to instanciate VirtualBoardView");
        const buttonsViewFactory = new DefaultButtonsViewFactory(this)
        this.buttonsView = buttonsViewFactory.build()
        this.CurrentFrameView = new CurrentFrameView({ board: this.model })
        this.listenTo(this.model, 'Render', this.render)
        this.on('AddPawn', this.triggerAddPawn)
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