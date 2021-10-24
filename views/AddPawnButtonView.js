import { ButtonView } from '../views/ButtonView.js'

class AddPawnButtonView extends ButtonView {
    preinitialize(){
        super.preinitialize()
        this.events = {
            "click": 'logClick'
        }
    }

    logClick(...args){
        console.log('click span',args)
    }

    icon(){
        return 'ADDPAWNBUTTONVIEW'
    }
}

export { AddPawnButtonView }