import { Frame } from 'Frame.js'

class Frames extends Backbone.Model {

    initialize(opts){
        // this.set("frames", opts.frames || [])
        this.set("active_frame", null)
        this.set("active_frame_index", -1)
    }

    moveSelectedFrame(frames_to_move){
        //Receives an integer and moves the selected frame 'frames_to_move' times to the right

        if (isNaN(frames_to_move)) throw new Error("frames_to_move needs to be an integer")
        frames_to_move = parseInt(frames_to_move)
        let index = this.currentFrameIndex()
        let totalFrames = this.getFrames().length
        let nextFrameIndex = (index + frames_to_move) % totalFrames
        let newCurrentFrame = this.getFrames()[nextFrameIndex]
        this.set("active_frame", newCurrentFrame)
        this.set("active_frame_index", nextFrameIndex)
        return newCurrentFrame
    }
    
    nextFrame(){
        return this.moveSelectedFrame(1)
    }

    previousFrame(){
        return this.moveSelectedFrame(-1)
    }

    getFrames(){
        return this.get("frames")
    }

    getCurrentFrame(){
        return this.get("active_frame")
    }

    getCurrentFrameIndex(){
        return this.get("active_frame_index")
    }

    addFrame(frame){
        if (!(frame instanceof Frame)) throw new Error("frame needs to be an instance of Frame")

        let frames = this.getFrames()
        frames.push(frame)
        this.set("frames", frames)
    }

    removeCurrentFrame(){
        let frames = this.getFrames()
        if (frames.length <= 0) throw new Error("Cant remove frame from empty frames array")
        
        let currentIndex = this.getCurrentFrameIndex()
        let framesBeforeCurrent = frames.slice(0, index)
        let framesAfterCurrent = frames.slice(currentIndex + 1, frames.length)
        let newFrames = [framesBeforeCurrent, framesAfterCurrent].flat()
        this.set("frames", newFrames)
        this.setCurrentFrame((currentIndex - 1) % newFrames.length)
    }

    setCurrentFrame(index){
        let frames = this.getFrames()
        this.set("active_frame_index", index)
        this.set("active_frame", frames[index])
    }
}

export { Frame }