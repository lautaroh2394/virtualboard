import ButtonView from './ButtonView.js';

class LoadJSONButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
        this.events = {
            'click #span': 'onClick',
            'change #jsonInput': 'loadJSONInput',
        };
    }

    loadJSONInput(ev) {
        const file = ev.target.files[0];
        file.text();
        file.text().then(text => {
            const json = JSON.parse(text);
            Backbone.trigger('LoadJSON', json);
        });
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'LoadJSONButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.$('#jsonInput').click();
    }

    icon() {
        return '⇧';
    }

    template() {
        return _.template('<span id=\'span\'> <%= icon %> </span><input hidden type=file id=\'jsonInput\'>');
    }
}

export default LoadJSONButtonView;
