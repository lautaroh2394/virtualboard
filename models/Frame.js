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
        const pawn = new Pawn({ name: this.pawns().length + 1, id: this.generateFrameId() });
        this.set('pawns', [...this.pawns(), pawn]);
        Backbone.trigger('Frame:Render');
    }

    setId(id) {
        this.set('id', id);
    }

    toJSON() {
        const json = { ...this.attributes };
        json.pawns = json.pawns.map(pawn => pawn.attributes);
        return json;
    }

    generateFrameId() {
        let id = this.pawns().length;
        let existsId = this.pawns().some(pawn => pawn.get('id') === id);
        while (existsId) {
            id += 1;
            existsId = this.pawns().some(pawn => pawn.get('id') === id);
        }
        return id;
    }
}

export default Frame;
