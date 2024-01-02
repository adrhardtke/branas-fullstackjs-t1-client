import Board from "../src/domain/entity/Board";

test('deve criar um board', () => {
    const board = new Board('project a')
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    board.addCard('todo','a',3)
    board.addCard('todo','b',6)
    board.addCard('todo','c',9)
    expect(board.getEstimative()).toBe(18)
});

test('deve criar um board e fazer o handle dos eventos', () => {
    const board = new Board('project a')
    board.on('addCard', () =>{})
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    board.addCard('todo','a',3)
    board.addCard('todo','b',6)
    board.addCard('todo','c',9)
    expect(board.getEstimative()).toBe(18)
});

test('deve criar um board e mover um card', () => {
    const board = new Board('project a')
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    board.addCard('todo','a',3)
    board.addCard('todo','b',6)
    board.addCard('todo','c',9)
    board.selectCard(board.columns[0], board.columns[0].cards[0])
    board.moveTo(board.columns[1])
    expect(board.columns[0].getEstimative()).toBe(15)
    expect(board.columns[1].getEstimative()).toBe(3)
    board.resetCard()
});

test('deve criar um board trocar a ordem de um card', () => {
    const board = new Board('project a')
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    board.addCard('todo','a',3)
    board.addCard('todo','b',6)
    board.addCard('todo','c',9)
    board.selectCard(board.columns[0], board.columns[0].cards[0])
    board.swap(board.columns[0].cards[1])
    board.resetCard()
    expect(board.columns[0].cards[0].title).toBe('b')
    expect(board.columns[0].cards[1].title).toBe('a')
});