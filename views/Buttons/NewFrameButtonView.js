import ButtonView from './ButtonView.js';

class NewFrameButtonView extends ButtonView {
    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'NewFrameButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('NewFrame');
    }

    icon() {
        return 'NEWFRAMEBUTTONVIEW';
    }
}

export default NewFrameButtonView;
