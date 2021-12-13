import ButtonView from './ButtonView.js';

class LoadJSONButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'LoadJSONButtonView';
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

export default LoadJSONButtonView;
