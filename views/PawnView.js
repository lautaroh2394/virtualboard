import Pawn from '../models/Pawn.js';
import FigureRepository from '../utils/FigureRepository.js';
import TemplateManager from '../utils/TemplateManager.js';

class PawnView extends Backbone.View {
    preinitialize() {
        this.className = 'draggable-item';
        this.events = {
            'mouseover span': 'showPawnName',
            'mouseout span.pawn': 'hidePawnName',
        };
    }

    showPawnName() {
        this.$('span.pawn-name').css('display', 'block');
    }

    hidePawnName() {
        this.$('span.pawn-name').removeAttr('style');
    }

    async template() {
        return TemplateManager.get('pawn-view', this.templateParams());
    }

    templateParams() {
        return {
            name: this.model.get('name'),
            figure: this.getFigureChar(),
            top: this.model.getTop(),
            left: this.model.getLeft(),
        };
    }

    getFigureChar() {
        const figure = this.model.get('figure');
        return FigureRepository.get(figure);
    }

    invalid(opts) {
        return !opts.model || !(opts.model instanceof Pawn);
    }

    initialize(opts) {
        if (this.invalid(opts)) throw new Error('Pawn Model required to instanciate PawnView');
    }

    async render() {
        this.$el.html(await this.template());
        this.applyOffset(this.el);
        this.makeDraggable(this.el);
        return this;
    }

    makeDraggable(element) {
        let currentOffsetX = 0; let currentOffsetY = 0; let initialPosX = 0; let
            initialPosY = 0;
        element.addEventListener('mousedown', dragMouseDown);
        const _this = this;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            initialPosX = e.clientX;
            initialPosY = e.clientY;
            document.addEventListener('mouseup', closeDragElement);
            // call a function whenever the cursor moves:
            document.addEventListener('mousemove', elementDrag);
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            currentOffsetX = initialPosX - e.clientX;
            currentOffsetY = initialPosY - e.clientY;
            initialPosX = e.clientX;
            initialPosY = e.clientY;
            // set the element's new position:
            const top = `${element.offsetTop - currentOffsetY}px`;
            element.style.top = top;
            const left = `${element.offsetLeft - currentOffsetX}px`;
            element.style.left = left;
            _this.model.setTop(top);
            _this.model.setLeft(left);
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.removeEventListener('mouseup', closeDragElement);
            document.removeEventListener('mousemove', elementDrag);
        }
    }

    applyOffset(element) {
        element.style.top = this.model.getTop() || this.screenVerticalCenter();
        element.style.left = this.model.getLeft() || this.screenHorizontalCenter();
    }

    screenHorizontalCenter() {
        return `${window.screen.width / 2}px`;
    }

    screenVerticalCenter() {
        return `${window.screen.height / 2}px`;
    }
}

export default PawnView;
