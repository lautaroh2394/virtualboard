class PawnView extends Backbone.View {
    getTemplate(){
        return '\
        <div class="draggable-item">\
            <span><%= name %></span>\
        </div>'
    }

    appliedTemplate(){
        let params = {
            name: this.model.get('name')
        }
        let template = this.getTemplate();
        let html = _.template(template)(params)

        return html
    }

    invalid(opts){
        return !opts.model || !(opts.model instanceof Pawn)
    }

    initialize(opts){
        if (this.invalid(opts)) throw new Error("Pawn Model required to instanciate PawnView");
    }

    render(){
        this.$el.html(this.appliedTemplate());
        makeDraggable(this.$el)
        return this;
    }

    makeDraggable(element){
        var currentOffsetX = 0, currentOffsetY = 0, initialPosX = 0, initialPosY = 0;
        element.addEventListener("mousedown", dragMouseDown);

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            initialPosX = e.clientX;
            initialPosY = e.clientY;
            document.addEventListener("mouseup", closeDragElement);
            // call a function whenever the cursor moves:
            document.addEventListener("mousemove", elementDrag);
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
            element.style.top = (element.offsetTop - currentOffsetY) + "px";
            element.style.left = (element.offsetLeft - currentOffsetX) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.removeEventListener("mouseup", closeDragElement)
            document.removeEventListener("mousemove", elementDrag)
        }
    }
}