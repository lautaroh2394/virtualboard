class Board extends Backbone.Model {
    initialize() {
        this.set({
            "screenHeight": window.outerHeight,
            "screenWidth": window.outerWidth
        });
        //create buttons
        //create board 'drawable' part (where to put the icons)
        //
    }

    pawns(){
        return this.get("pawns")
    }
}

export { Board }