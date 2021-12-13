import ButtonView from './ButtonView.js';

class LoadJsonButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'LoadJsonButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        // TODO
    }

    icon() {
        return 'LOADJSONBUTTONVIEW';
    }
}

export default LoadJsonButtonView;
