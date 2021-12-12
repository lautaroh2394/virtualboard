import PawnView from './PawnView.js';

class CurrentFrameView extends Backbone.View {
    preinitialize() {
        this.className = 'frame-view';
    }

    initialize(opts) {
        // Receives a Frame object as model in opts
    }

    render() {
        this.$el.html('');
        this.model.pawns()
            .map(child => new PawnView({ model: child }))
            .map(pawnView => this.el.append(pawnView.render().el));
        return this;
    }
}

export default CurrentFrameView;
