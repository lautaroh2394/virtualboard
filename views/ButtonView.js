class ButtonView extends Backbone.View {
    preinitialize(){
        this.className = 'button-view'
        this.events = {
            "click": 'onClick'
        }
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
        this.delegateEvents() // I shouldnt be doing this. render should work seamlessly.
        return this
    }

    log(...args){
        console.log(`Backbone event catched in ${this.classNameForLog}`, args)
    }
}

export { ButtonView }