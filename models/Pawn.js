class Pawn extends Backbone.Model {
    initialize({ top, left }) {
        this.top = top;
        this.left = left;
    }

    getTop() {
        return this.top || 0;
    }

    getLeft() {
        return this.left || 0;
    }

    setTop(top) { this.top = top; }

    setLeft(left) { this.left = left; }
}

export default Pawn;
