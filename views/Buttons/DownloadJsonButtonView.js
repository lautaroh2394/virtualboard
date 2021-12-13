import ButtonView from './ButtonView.js';

class DownloadJsonButtonView extends ButtonView {
    preinitialize() {
        super.preinitialize();
    }

    initialize({ parent }) {
        this.parent = parent;
        this.classNameForLog = 'DownloadJsonButtonView';
        this.on('all', this.log);
    }

    onClick(event) {
        this.log(event);
        this.parent.trigger('DownloadJSON');
    }

    icon() {
        return 'DOWNLOADJSONBUTTONVIEW';
    }
}

export default DownloadJsonButtonView;
