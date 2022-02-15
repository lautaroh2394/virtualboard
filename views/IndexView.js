import TemplateManager from '../utils/TemplateManager.js';

class IndexView extends Backbone.View {
    preinitialize() {
        this.className = 'frame-index-view';
    }

    initialize({ id }) {
        this.id = id;
    }

    async template() {
        return TemplateManager.get('index-view', { id: this.id });
    }

    async render() {
        this.$el.html(await this.template());
        return this;
    }
}

export default IndexView;
