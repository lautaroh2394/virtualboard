import ButtonsView from '../../views/ButtonsView.js';
import AddPawnButtonView from '../../views/Buttons/AddPawnButtonView.js';
import NewFrameButtonView from '../../views/Buttons/NewFrameButtonView.js';
import NextFrameButtonView from '../../views/Buttons/NextFrameButtonView.js';
import PreviousFrameButtonView from '../../views/Buttons/PreviousFrameButtonView.js';
import DownloadJsonButtonView from '../../views/Buttons/DownloadJsonButtonView.js';
import LoadJsonButtonView from '../../views/Buttons/LoadJsonButtonView.js';

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
            new DownloadJsonButtonView({ parent: this.parent }),
            new LoadJsonButtonView({ parent: this.parent }),
        ];
    }
}

export default DefaultButtonsViewFactory;
