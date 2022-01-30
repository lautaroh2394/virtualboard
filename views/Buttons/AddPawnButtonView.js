import ButtonView from './ButtonView.js';

class AddPawnButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'AddPawnButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('AddPawn');
    }

    icon() {
        return '+';
    }
}

export default AddPawnButtonView;
