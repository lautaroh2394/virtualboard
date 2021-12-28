class IndexView extends Backbone.View {
    preinitialize() {
        this.className = 'frame-index-view';
    }

    initialize({ id }) {
        this.id = id;
    }

    render() {
        this.$el.html(`<span>Frame id: ${this.id}</span>`);
        return this;
    }
}

export default IndexView;
