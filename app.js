import {Frame} from "./models/Frame.js"
import {Frames} from "./models/Frames.js"
import {Pawn} from "./models/Pawn.js"
import {VirtualBoardView} from "./views/VirtualBoardView.js"
import {PawnView} from "./views/PawnView.js"
import {ButtonsView} from "./views/ButtonsView.js"
import {CurrentFrameView}  from "./views/CurrentFrameView.js"

import {testBoardData} from "./test/testData.js"

window.addEventListener("load", ev => {
    const mainFrame = new Frame(testBoardData)
    const frames = new Frames({
        frames: [mainFrame],
        active_frame: mainFrame,
        active_frame_index: 0
    })
    const virtualBoardView = new VirtualBoardView({ model: frames })
    document.body.append(virtualBoardView.render().el)
    window.___ = {
        virtualBoardView: virtualBoardView
    }
})