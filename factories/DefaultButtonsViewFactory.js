import { ButtonsView } from '../views/ButtonsView.js'
import { AddPawnButtonView } from '../views/AddPawnButtonView.js'

class DefaultButtonsViewFactory {
    build(){
        return new ButtonsView(this.defaultButtons())
    }

    defaultButtons(){
        return [
            new AddPawnButtonView()
        ]
    }
}

export { DefaultButtonsViewFactory }