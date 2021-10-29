import { ButtonView } from '../views/ButtonView.js'

class AddPawnButtonView extends ButtonView {
    preinitialize(){
        super.preinitialize()
        this.events = {
            "click": 'addPawn'
        }
    }

    initialize({parent}){
        this.parent = parent
        this.on('all', this.log)
    }

    log(...args){
        console.log('Backbone event catched', args)
    }

    addPawn(event){
        this.log(event)
        this.parent.trigger("AddPawn")
    }

    icon(){
        return 'ADDPAWNBUTTONVIEW'
    }
}

export { AddPawnButtonView }