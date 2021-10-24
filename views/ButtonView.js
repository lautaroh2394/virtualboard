class ButtonView extends Backbone.View {
    preinitialize(){
        this.className = 'button-view'
    }

    template(){
        return _.template('<span> <%= icon %> </span>')
    }

    templateParams(){
        return {
            icon: this.icon()
        }
    }

    icon(){
        throw Error('Not implemented')
    }

    render(){
        this.$el.html(this.template()(this.templateParams()))
        return this
    }
}

export { ButtonView }