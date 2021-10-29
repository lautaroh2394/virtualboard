class ButtonsView extends Backbone.View {
    preinitialize(){
        this.className = 'buttons-view'
    }

    initialize(buttonViewList){
        this.buttonViewList = buttonViewList
    }

    render(){
     this.buttonViewList.forEach(buttonView => {
         this.el.append(buttonView.render().el)
     })
     return this
    }
}

export { ButtonsView }