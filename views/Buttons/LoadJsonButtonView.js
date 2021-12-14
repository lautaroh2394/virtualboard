import ButtonView from './ButtonView.js';

class LoadJSONButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
        this.events = {
            'click #span': 'onClick',
            'change #jsonInput': 'loginput',
        };
    }

    loginput(ev) {
        console.log('json input change', ev);
        const file = ev.target.files[0];

        // Opc 1
        /*
        file.text();
        file.text().then(text => {
            const json = JSON.parse(text);
            Backbone.trigger('LoadJSON', json);
        });
        */
        // Opc 2
        const readableStream = file.stream();
        const streamReader = readableStream.getReader();
        streamReader.read().then(data => {
            const text = Array.from(data.value)
                .map(c => String.fromCharCode(c))
                .join('');
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
        return 'LOADJSONBUTTONVIEW';
    }

    template() {
        return _.template('<span id=\'span\'> <%= icon %> </span><input hidden type=file id=\'jsonInput\'>');
    }
}

export default LoadJSONButtonView;
