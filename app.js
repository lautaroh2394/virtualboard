import {Board} from "./models/Board.js"
import {Pawn} from "./models/Pawn.js"
import {BoardView} from "./views/BoardView.js"
import {PawnView} from "./views/PawnView.js"
import {ButtonView} from "./views/ButtonView.js"
import {CanvasView}  from "./views/CanvasView.js"

import {testBoardData} from "./test/testData.js"

window.addEventListener("load", ev => {
    let mainBoard = new Board(testBoardData)
    let boardView = new BoardView({ model: mainBoard })
    document.body.append(boardView.render().el)
})