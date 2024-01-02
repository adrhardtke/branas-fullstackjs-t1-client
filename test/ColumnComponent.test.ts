import ColumnComponentVue from "../src/components/ColumnComponent.vue"
import Board from "../src/domain/entity/Board"
import { mount } from '@vue/test-utils'
import Column from "../src/domain/entity/Column"
import Card from "../src/domain/entity/Card"

test('deve criar um componente de column', async () => {
    const board = new Board('project a')
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    const column = board.columns[0]
    column.addCard(new Card('a',3))
    column.addCard(new Card('b',6))
    const wrapper = mount(ColumnComponentVue, {
        props: {
            board,
            column
        }
    })
    const estimative = wrapper.get('.estimative').text()
    expect(estimative).toBe('9')
    await wrapper.get(".new-card-input").setValue('c')
    await wrapper.get(".new-card-input").trigger('keyup.enter')
    expect(column.cards[2].title).toBe('c')
    expect(column.cards).toHaveLength(3)

    await wrapper.get('.delete-column').trigger("click")
    expect(board.columns).toHaveLength(2)
})