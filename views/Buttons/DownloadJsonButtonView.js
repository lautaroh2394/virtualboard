import ButtonView from './ButtonView.js';

class DownloadJSONButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'DownloadJSONButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('DownloadJSON');
    }

    icon() {
        return '⇩';
    }
}

export default DownloadJSONButtonView;
