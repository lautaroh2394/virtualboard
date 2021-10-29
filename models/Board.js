import { Pawn } from './Pawn.js'

class Board extends Backbone.Model {
    initialize() {
        this.set({
            "screenHeight": window.outerHeight,
            "screenWidth": window.outerWidth
        });
        Backbone.on("AddPawn", this.addPawn)
        this.on("AddPawn", this.addPawn)
    }

    pawns(){
        return this.get("pawns")
    }

    addPawn(){
        const pawn = new Pawn({ name: this.pawns().length})
        this.trigger("Render")
    }
}

export { Board }