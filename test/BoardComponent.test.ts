import BoardComponentVue from "../src/components/BoardComponent.vue"
import Board from "../src/domain/entity/Board"
import { mount } from '@vue/test-utils'

test('deve criar um componente de board', async () => {
    const board = new Board('project a')
    board.addColumn(1, 'todo', true)
    board.addColumn(2, 'doing', true)
    board.addColumn(3, 'done', false)
    board.addCard('todo','a',3)
    board.addCard('todo','b',6)
    board.addCard('todo','c',9)
    const wrapper = mount(BoardComponentVue, {
        props: {
            board
        }
    })
    const estimative = wrapper.get('#estimative').text()
    expect(estimative).toBe('18')
    await wrapper.get("#new-column-input").setValue('test')
    await wrapper.get('#new-column-button').trigger('click')
    expect(board.columns).toHaveLength(4)
})