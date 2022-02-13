class FigureRepository {
    static figures = {
        'circle': '⬤'
    }

    static get(figure) {
        return FigureRepository.figures[figure];
    }
}

export default FigureRepository;
