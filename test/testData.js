import Pawn from '../models/Pawn.js';

const testBoardData = {
    pawns: [
        new Pawn({ name: 1, id: 0 }),
        new Pawn({ name: 2, id: 1 }),
        new Pawn({ name: 3, id: 2 }),
    ],
};

const TestEnabled = true;
export { testBoardData, TestEnabled };
