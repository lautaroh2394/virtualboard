import ButtonView from './ButtonView.js';

class NextFrameButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
        this.events = {
            click: 'onClick',
        };
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'NextFrameButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('AddPawn');
    }

    icon() {
        return 'NEXTFRAMEBUTTONVIEW';
    }
}

export default NextFrameButtonView;
