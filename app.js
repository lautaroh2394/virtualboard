import Frame from './models/Frame.js';
import Frames from './models/Frames.js';
import VirtualBoardView from './views/VirtualBoardView.js';
import { testBoardData, TestEnabled } from './test/testData.js';

window.addEventListener('load', () => {
    let mainFrame;
    if (TestEnabled) {
        mainFrame = new Frame({ ...testBoardData, id: 0 });
    } else {
        mainFrame = new Frame({ id: 0 });
    }

    const frames = new Frames({
        frames: [mainFrame],
        active_frame: mainFrame,
        active_frame_index: 0,
    });
    const virtualBoardView = new VirtualBoardView({ model: frames });
    virtualBoardView.render().then(render => {
        document.body.append(render.el);
        window.___ = {
            virtualBoardView,
        };
    });
});
