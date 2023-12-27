import Board from "../domain/entity/Board";
import HttpClient from "../infra/Http";

export default class BoardService {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {

    }

    async getBoardById(id: string): Promise<Board> {
        // from api
        // const boardData = await this.httpClient.get(`${this.baseUrl}/boards/${id}`)
        // const board = new Board(boardData.name)
        // for(const column of boardData.columns) {
        //   board.addColumn(column.name, column.hasEstimative)
        //   for(const card of column.cards){
        //     board.addCard(column.name, card.title, card.estimative)
        //   }
        // }
        
        // return board

        const board = new Board("project a")
        board.addColumn("Todo", true)
        board.addColumn("Doing")
        board.addColumn("Done")

        board.addCard("Todo", "A", 3)
        board.addCard("Todo", "B", 6)
        board.addCard("Todo", "C", 9)

        board.addCard("Done", "D", 12)
        board.addCard("Done", "E", 15)
        board.addCard("Done", "F", 18)

        return board

    }
}