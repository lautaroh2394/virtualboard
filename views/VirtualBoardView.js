import Frames from '../models/Frames.js';
import CurrentFrameView from './CurrentFrameView.js';
import DefaultButtonsViewFactory from '../utils/factories/DefaultButtonsViewFactory.js';
import Utils from '../utils/utils.js';

class VirtualBoardView extends Backbone.View {
    preinitialize() {
        this.className = 'board-view';
    }

    invalid(opts) {
        return !opts.model || !(opts.model instanceof Frames);
    }

    initialize(opts) {
        // Receives a Frames model in the opts.model key.
        // Sets automatically to this.model due to Backbone

        if (this.invalid(opts)) throw new Error('Board Model required to instanciate VirtualBoardView');
        const buttonsViewFactory = new DefaultButtonsViewFactory(this);
        this.buttonsView = buttonsViewFactory.build();
        this.on('AddPawn', this.triggerAddPawn);
        this.on('NewFrame', this.triggerNewFrame);
        this.on('NextFrame', this.triggerNextFrame);
        this.on('PreviousFrame', this.triggerPreviousFrame);
        this.on('DownloadJSON', this.downloadJSON);
        Backbone.on('Frame:Render', this.render, this);
        Backbone.on('Frames:Render', this.render, this);
    }

    createCurrentFrameView() {
        return new CurrentFrameView({ model: this.model.getCurrentFrame() });
    }

    log(...args) {
        console.log('VirtualBoardView - event catched', args);
    }

    triggerAddPawn() {
        this.log();
        this.model.trigger('AddPawn');
    }

    triggerNewFrame() {
        this.log();
        this.model.trigger('NewFrame');
    }

    triggerNextFrame() {
        this.log();
        this.model.trigger('NextFrame');
    }

    triggerPreviousFrame() {
        this.log();
        this.model.trigger('PreviousFrame');
    }

    downloadJSON() {
        this.log();
        const json = this.model.generateJSON();
        Utils.downloadJson(json);
    }

    render() {
        this.$el.html('');
        this.el.append(this.buttonsView.render().el);
        this.el.append(this.createCurrentFrameView().render().el);
        return this;
    }
}

export default VirtualBoardView;
