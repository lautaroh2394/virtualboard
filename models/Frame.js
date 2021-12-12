import Pawn from './Pawn.js';

class Frame extends Backbone.Model {
    initialize() {
        // Backbone.on("AddPawn", this.addPawn)
        this.on('AddPawn', this.addPawn);
        if (!(this.pawns())) this.set('pawns', []);
    }

    pawns() {
        return this.get('pawns');
    }

    log(...args) {
        console.log('Frame - Backbone event catched', args);
    }

    addPawn() {
        this.log();
        const pawn = new Pawn({ name: this.pawns().length + 1 });
        this.set('pawns', [...this.pawns(), pawn]);
        // this.trigger("Render")
        Backbone.trigger('Frame:Render');
    }

    setId(id) {
        this.set('id', id);
    }
}

export default Frame;
