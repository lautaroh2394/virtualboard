class Board extends Backbone.Model {
    initialize() {
        this.set({
            "screenHeight": window.outerHeight,
            "screenWidth": window.outerWidth
        });
    }

    pawns(){
        return this.get("pawns")
    }
}

export { Board }