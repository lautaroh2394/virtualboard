import ButtonView from './ButtonView.js';

class NextFrameButtonView extends ButtonView {
    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'NextFrameButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('NextFrame');
    }

    icon() {
        return 'NEXTFRAMEBUTTONVIEW';
    }
}

export default NextFrameButtonView;
