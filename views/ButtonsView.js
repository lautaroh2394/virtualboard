class ButtonsView extends Backbone.View {
    preinitialize() {
        this.className = 'buttons-view';
    }

    initialize(buttonViewList) {
        this.buttonViewList = buttonViewList;
    }

    async render() {
        const results = await Promise.all(
            this.buttonViewList.map(buttonView => buttonView.render()),
        );
        results.forEach(render => this.el.append(render.el));
        return this;
    }
}

export default ButtonsView;
