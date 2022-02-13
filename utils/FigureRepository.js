class FigureRepository {
    /*
    static figures = {
        'circle': '⬤'
    }
    */

    static get(figure) {
        const figures = {
            circle: '⬤',
        };

        // return FigureRepository.figures[figure];
        return figures[figure];
    }
}

export default FigureRepository;
