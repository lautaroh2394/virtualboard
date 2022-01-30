import ButtonView from './ButtonView.js';

class PreviousFrameButtonView extends ButtonView {
    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'PreviousFrameButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('PreviousFrame');
    }

    icon() {
        return '❮';
    }
}

export default PreviousFrameButtonView;
