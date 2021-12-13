import Frame from './Frame.js';

class Frames extends Backbone.Model {
    initialize(opts) {
        this.set('frames', opts.frames || []);
        this.setFramesIds();
        this.setSelectedFrame(opts);
        this.on('AddPawn', this.addPawn);
        this.on('NewFrame', this.newFrame);
        this.on('NextFrame', this.nextFrame);
        this.on('PreviousFrame', this.previousFrame);
    }

    moveSelectedFrame(frames_to_move) {
        // Receives an integer and moves the selected frame 'frames_to_move' times to the right

        if (Number.isNaN(frames_to_move)) throw new Error('frames_to_move needs to be an integer');
        frames_to_move = parseInt(frames_to_move);
        const index = this.getCurrentFrameIndex();
        const totalFrames = this.getFrames().length;
        const nextFrameIndex = (index + frames_to_move + totalFrames) % totalFrames;
        const newCurrentFrame = this.getFrames()[nextFrameIndex];
        this.set('active_frame', newCurrentFrame);
        this.set('active_frame_index', nextFrameIndex);
        Backbone.trigger('Frames:Render');
        return newCurrentFrame;
    }

    setFramesIds() {
        this.set('frames', this.getFrames().map((frame, index) => {
            // Todo: Improve id generation.
            // Maybe create a model that can provide ids and checks and avoids duplication
            frame.setId(index);
            return frame;
        }));
    }

    setSelectedFrame(opts) {
        let active_frame = null;
        let active_frame_index = -1;

        if (opts.active_frame && opts.active_frame_index) {
            active_frame = opts.active_frame;
            active_frame_index = opts.active_frame_index;
        } else if (this.getFrames() && this.getFrames().length > 0) {
            [active_frame] = this.getFrames();
            active_frame_index = 0;
        }

        this.set('active_frame', active_frame);
        this.set('active_frame_index', active_frame_index);
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
        this.insertFrame(newFrame, this.getCurrentFrameIndex() + 1);
        this.nextFrame();
        Backbone.trigger('Frames:Render');
    }

    insertFrame(frame, index) {
        const frames = this.getFrames();
        const framesBefore = frames.slice(0, index);
        const framesAfter = frames.slice(index, frames.length);
        const newFrames = [framesBefore, frame, framesAfter].flat();
        this.set('frames', newFrames);
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

        const currentIndex = this.getgetCurrentFrameIndex();
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

    generateJSON() {
        if (this.getFrames().length === 0) return [];
        return this.getFrames().map(frame => frame.toJSON());
    }
}

export default Frames;
