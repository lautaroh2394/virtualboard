import { Pawn } from './Pawn.js'

class Frame extends Backbone.Model {
    initialize() {
        // Backbone.on("AddPawn", this.addPawn)
        this.on("AddPawn", this.addPawn)
    }

    pawns(){
        return this.get("pawns")
    }

    log(...args){
        console.log('Frame - Backbone event catched', args)
    }

    addPawn(){
        this.log()
        const pawn = new Pawn({ name: this.pawns().length + 1 })
        this.set("pawns", [...this.pawns(), pawn])
        this.trigger("Render")
    }
}

export { Frame }