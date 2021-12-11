import PawnView from './PawnView.js';

class CurrentFrameView extends Backbone.View {
    preinitialize() {
        this.className = 'frame-view';
    }

    initialize(opts) {
        this.board = opts.board;
    }

    render() {
        this.$el.html('');
        this.board.pawns()
            .map(child => new PawnView({ model: child }))
            .map(pawnView => this.el.append(pawnView.render().el));
        return this;
    }
}

export default CurrentFrameView;
