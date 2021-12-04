import { ButtonView } from '../views/ButtonView.js'

class AddPawnButtonView extends ButtonView {
    preinitialize(){
        super.preinitialize()
    }

    initialize({parent}){
        this.parent = parent
        this.classNameForLog = "AddPawnButtonView"
        this.on('all', this.log)
    }

    onClick(event){
        this.log(event)
        this.parent.trigger("AddPawn")
    }

    icon(){
        return 'ADDPAWNBUTTONVIEW'
    }
}

export { AddPawnButtonView }