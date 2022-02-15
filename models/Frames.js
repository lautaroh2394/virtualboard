import Frame from './Frame.js';
import Pawn from './Pawn.js';

class Frames extends Backbone.Model {
    initialize(opts) {
        this.set('frames', opts.frames || []);
        this.setSelectedFrame(opts);
        this.on('AddPawn', this.addPawn);
        this.on('NewFrame', this.newFrame);
        this.on('NextFrame', this.nextFrame);
        this.on('PreviousFrame', this.previousFrame);
        this.on('LoadJSON', this.loadJSON);
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
        const currentFramePawnsData = this.getCurrentFrame().toJSON().pawns;
        const currentFramePawns = currentFramePawnsData.map(pawnData => new Pawn(pawnData));
        const newFrame = new Frame({ id: this.generateFrameId(), pawns: currentFramePawns });
        this.insertFrame(newFrame, this.getCurrentFrameIndex() + 1);
        this.nextFrame();
    }

    insertFrame(frame, index) {
        const frames = this.getFrames();
        const framesBefore = frames.slice(0, index);
        const framesAfter = frames.slice(index, frames.length);
        const newFrames = [framesBefore, frame, framesAfter].flat();
        this.set('frames', newFrames);
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

    loadJSON(data) {
        const frames = data.reduce((prev, curr) => {
            const pawns = curr.pawns.map(pawn_data => new Pawn(pawn_data));
            const new_frame = new Frame({ pawns });
            return [...prev, new_frame];
        }, []);

        this.set({ frames });
        Backbone.trigger('Frame:Render');
    }

    generateFrameId() {
        let id = this.getFrames().length;
        let existsId = this.getFrames().some(frame => frame.get('id') === id);
        while (existsId) {
            id += 1;
            existsId = this.getFrames().some(frame => frame.get('id') === id);
        }
        return id;
    }
}

export default Frames;
