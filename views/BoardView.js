class BoardView extends Backbone.View {
    template(){

    }

    initialize(){
        this.buttonView = new ButtonView()
        this.canvasView = new CanvasView()
    }

    render(){
        this.$el.html(this.template());
    }
}