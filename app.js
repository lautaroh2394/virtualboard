import Frame from './models/Frame.js';
import Frames from './models/Frames.js';
import VirtualBoardView from './views/VirtualBoardView.js';
import testBoardData from './test/testData.js';

window.addEventListener('load', () => {
    const mainFrame = new Frame({ ...testBoardData, id: 0 });
    const frames = new Frames({
        frames: [mainFrame],
        active_frame: mainFrame,
        active_frame_index: 0,
    });
    const virtualBoardView = new VirtualBoardView({ model: frames });
    document.body.append(virtualBoardView.render().el);
    window.___ = {
        virtualBoardView,
    };
});
