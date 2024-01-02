import HttpClient from "../infra/Http";
import AuthService from "../service/Auth.service";
import BoardService from "../service/Board.service";

export default class ServiceFactory {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {

    }

    createBoardService(){
        return new BoardService(this.httpClient, this.baseUrl)
    }

    createAuthService(){
        return new AuthService(this.httpClient, this.baseUrl)
    }

}