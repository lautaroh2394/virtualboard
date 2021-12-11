import ButtonsView from '../views/ButtonsView.js';
import AddPawnButtonView from '../views/AddPawnButtonView.js';
import NewFrameButtonView from '../views/NewFrameButtonView.js';
import NextFrameButtonView from '../views/NextFrameButtonView.js';
import PreviousFrameButtonView from '../views/PreviousFrameButtonView.js';

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
            new NewFrameButtonView({ parent: this.parent }),
            new NextFrameButtonView({ parent: this.parent }),
            new PreviousFrameButtonView({ parent: this.parent }),
        ];
    }
}

export default DefaultButtonsViewFactory;
