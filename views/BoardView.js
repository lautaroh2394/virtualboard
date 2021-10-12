class BoardView extends Backbone.View {
    template(){
        return '\
        <div class="board" draggable="true"></div>'
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Board)
    }

    initialize(opts){
        if (this.invalid(opts)) throw new Error("Board Model required to instanciate BoardView");
        this.buttonView = new ButtonView()
        this.canvasView = new CanvasView()
    }

    render(){
        this.$el.html(this.template());
        this.$el.append(this.buttonView.render().$el)
        this.$el.append(this.canvasView.render().$el)
        this.model.pawns()
            .map(child => new PawnView({model:child}))
            .map( pawnView =>
                this.$el[0].appendChild(pawnView.render().$el[0])
            )
        return this
    }
}