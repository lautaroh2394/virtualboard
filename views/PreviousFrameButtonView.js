import { ButtonView } from './ButtonView.js'

class PreviousFrameButtonView extends ButtonView {
    preinitialize(){
        super.preinitialize()
        this.events = {
            "click": 'onClick'
        }
    }

    initialize({parent}){
        this.parent = parent
        this.classNameForLog = "PreviousFrameButtonView"
        this.on('all', this.log)
    }

    onClick(event){
        this.log(event)
        this.parent.trigger("AddPawn")
    }

    icon(){
        return 'PREVIOUSFRAMEBUTTONVIEW'
    }
}

export { PreviousFrameButtonView }