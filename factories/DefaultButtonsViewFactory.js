import ButtonsView from '../views/ButtonsView.js';
import AddPawnButtonView from '../views/AddPawnButtonView.js';

class DefaultButtonsViewFactory {
    constructor(parent) {
        this.parent = parent;
    }

    build() {
        return new ButtonsView(this.buttons());
    }

    buttons() {
        return [
            new AddPawnButtonView({ parent: this.parent }),
        ];
    }
}

export default DefaultButtonsViewFactory;
