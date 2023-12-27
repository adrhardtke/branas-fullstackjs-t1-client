import HttpClient from "../infra/Http";
import BoardService from "../service/Board.service";

export default class ServiceFactory {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {

    }

    createBoardService(){
        return new BoardService(this.httpClient, this.baseUrl)
    }

}