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

    log(...args){
        console.log('Board - Backbone event catched', args)
    }

    addPawn(){
        this.log()
        const pawn = new Pawn({ name: this.pawns().length + 1 })
        this.set("pawns", [...this.pawns(), pawn])
        this.trigger("Render")
    }
}

export { Board }