class Pawn extends Backbone.Model {
    initialize(opts) {
        if (!opts.figure) this.setDefaultFigure();
    }

    setDefaultFigure() {
        this.set('figure', 'circle');
    }

    getTop() {
        return this.get('top') || 0;
    }

    getLeft() {
        return this.get('left') || 0;
    }

    setTop(top) { this.set({ top }); }

    setLeft(left) { this.set({ left }); }
}

export default Pawn;
