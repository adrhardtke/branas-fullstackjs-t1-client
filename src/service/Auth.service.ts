import Credentials from "../domain/entity/Credentials";
import Session from "../domain/entity/Session";
import HttpClient from "../infra/Http";

export default class AuthService {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {
    }

    async login (credentials: Credentials): Promise<Session> {
        // chamada pro backend login
        console.log(credentials)
        const session = new Session(credentials.username, '12345')
        return session 
    }
}
