import { ButtonsView } from '../views/ButtonsView.js'
import { AddPawnButtonView } from '../views/AddPawnButtonView.js'

class DefaultButtonsViewFactory {
    build(){
        return new ButtonsView(this.buttons())
    }

    buttons(){
        return [
            new AddPawnButtonView()
        ]
    }
}

export { DefaultButtonsViewFactory }