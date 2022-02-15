import TemplateManager from '../../utils/TemplateManager.js';

class ButtonView extends Backbone.View {
    preinitialize() {
        this.className = 'button-view';
        this.events = {
            click: 'onClick',
        };
    }

    templateName() {
        return 'button-view';
    }

    async template() {
        return TemplateManager.get(this.templateName(), this.templateParams());
    }

    templateParams() {
        return {
            icon: this.icon(),
        };
    }

    icon() {
        throw Error('Not implemented');
    }

    async render() {
        this.$el.html(await this.template());
        this.delegateEvents(); // I shouldnt be doing this. render should work seamlessly.
        return this;
    }

    log(...args) {
        console.log(`Backbone event catched in ${this.classNameForLog}`, args);
    }
}

export default ButtonView;
