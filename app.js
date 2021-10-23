import {Board} from "./models/Board.js"
import {Pawn} from "./models/Pawn.js"
import {BoardView} from "./views/BoardView.js"
import {PawnView} from "./views/PawnView.js"
import {ButtonsView} from "./views/ButtonsView.js"
import {CanvasView}  from "./views/CanvasView.js"

import {testBoardData} from "./test/testData.js"

window.addEventListener("load", ev => {
    const mainBoard = new Board(testBoardData)
    const boardView = new BoardView({ model: mainBoard })
    document.body.append(boardView.render().el)
})