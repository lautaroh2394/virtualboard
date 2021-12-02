import {Frame} from "./models/Frame.js"
import {Pawn} from "./models/Pawn.js"
import {VirtualBoardView} from "./views/VirtualBoardView.js"
import {PawnView} from "./views/PawnView.js"
import {ButtonsView} from "./views/ButtonsView.js"
import {CurrentFrameView}  from "./views/CurrentFrameView.js"

import {testBoardData} from "./test/testData.js"

window.addEventListener("load", ev => {
    const mainBoard = new Frame(testBoardData)
    const virtualBoardView = new VirtualBoardView({ model: mainBoard })
    document.body.append(virtualBoardView.render().el)
    window.___ = {
        board: mainBoard,
        virtualBoardView: virtualBoardView
    }
})