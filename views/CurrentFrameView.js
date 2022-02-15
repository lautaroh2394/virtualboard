import PawnView from './PawnView.js';
import IndexView from './IndexView.js';

class CurrentFrameView extends Backbone.View {
    preinitialize() {
        this.className = 'frame-view';
    }

    initialize(opts) {
        // Receives a Frame object as model in opts
    }

    async render() {
        this.$el.html('');
        await this.model.pawns()
            .map(child => new PawnView({ model: child }))
            .map(async pawnView => {
                const render = await pawnView.render();
                this.el.append(render.el);
            });

        const indexView = new IndexView({ id: this.model.get('id') });
        const indexViewRender = await indexView.render();
        this.el.append(indexViewRender.el);
        return this;
    }
}

export default CurrentFrameView;
