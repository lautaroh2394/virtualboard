import Frame from './Frame.js';

class Frames extends Backbone.Model {
    initialize(opts) {
        this.set('frames', opts.frames || []);
        this.setFramesIds();
        this.setFirstFrameSelected();
        this.set('active_frame', opts.active_frame || null);
        this.set('active_frame_index', opts.active_frame_index || -1);
        this.on('AddPawn', this.addPawn);
        this.on('NewFrame', this.newFrame);
    }

    moveSelectedFrame(frames_to_move) {
        // Receives an integer and moves the selected frame 'frames_to_move' times to the right

        if (Number.isNaN(frames_to_move)) throw new Error('frames_to_move needs to be an integer');
        frames_to_move = parseInt(frames_to_move);
        const index = this.currentFrameIndex();
        const totalFrames = this.getFrames().length;
        const nextFrameIndex = (index + frames_to_move) % totalFrames;
        const newCurrentFrame = this.getFrames()[nextFrameIndex];
        this.set('active_frame', newCurrentFrame);
        this.set('active_frame_index', nextFrameIndex);
        return newCurrentFrame;
    }

    nextFrame() {
        return this.moveSelectedFrame(1);
    }

    previousFrame() {
        return this.moveSelectedFrame(-1);
    }

    getFrames() {
        return this.get('frames');
    }

    getCurrentFrame() {
        return this.get('active_frame');
    }

    getCurrentFrameIndex() {
        return this.get('active_frame_index');
    }

    newFrame() {
        const newFrame = new Frame();
        this.addFrame(newFrame);
        this.nextFrame();
        Backbone.trigger('Frames:Render');
    }

    addFrame(frame) {
        if (!(frame instanceof Frame)) throw new Error('frame needs to be an instance of Frame');

        const frames = this.getFrames();
        frames.push(frame);
        this.set('frames', frames);
    }

    removeCurrentFrame() {
        const frames = this.getFrames();
        if (frames.length <= 0) throw new Error('Cant remove frame from empty frames array');

        const currentIndex = this.getCurrentFrameIndex();
        const framesBeforeCurrent = frames.slice(0, currentIndex);
        const framesAfterCurrent = frames.slice(currentIndex + 1, frames.length);
        const newFrames = [framesBeforeCurrent, framesAfterCurrent].flat();
        this.set('frames', newFrames);
        this.setCurrentFrame((currentIndex - 1) % newFrames.length);
    }

    setCurrentFrame(index) {
        const frames = this.getFrames();
        this.set('active_frame_index', index);
        this.set('active_frame', frames[index]);
    }

    addPawn() {
        this.getCurrentFrame().addPawn();
    }
}

export default Frames;
