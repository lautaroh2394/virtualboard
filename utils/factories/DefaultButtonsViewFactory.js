import ButtonsView from '../../views/ButtonsView.js';
import AddPawnButtonView from '../../views/Buttons/AddPawnButtonView.js';
import NewFrameButtonView from '../../views/Buttons/NewFrameButtonView.js';
import NextFrameButtonView from '../../views/Buttons/NextFrameButtonView.js';
import PreviousFrameButtonView from '../../views/Buttons/PreviousFrameButtonView.js';
import DownloadJSONButtonView from '../../views/Buttons/DownloadJSONButtonView.js';
import LoadJSONButtonView from '../../views/Buttons/LoadJSONButtonView.js';

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
            new DownloadJSONButtonView({ parent: this.parent }),
            new LoadJSONButtonView({ parent: this.parent }),
        ];
    }
}

export default DefaultButtonsViewFactory;
