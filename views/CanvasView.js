class CanvasView extends Backbone.View {
    getTemplate(){
        return '<div class="board" draggable="true"></div>'
    }
}

export { CanvasView }