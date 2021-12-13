class Pawn extends Backbone.Model {
    initialize({ top, left }) {
        this.set({
            top,
            left,
        });
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
