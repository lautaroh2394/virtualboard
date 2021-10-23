import {Board} from "./models/Board.js"
import {Pawn} from "./models/Pawn.js"
import {BoardView} from "./views/BoardView.js"
import {PawnView} from "./views/PawnView.js"
import {ButtonView} from "./views/ButtonView.js"
import {CanvasView}  from "./views/CanvasView.js"

window.addEventListener("load", ev => {
    let mainBoard = new Board({pawns: [new Pawn({name:1}),new Pawn({name:2}),new Pawn({name:3})]})
    let boardView = new BoardView({model: mainBoard})
    document.body.append(boardView.render().el)
})