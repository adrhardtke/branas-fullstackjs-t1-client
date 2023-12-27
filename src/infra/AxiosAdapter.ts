import axios from "axios";
import HttpClient from "./Http";

export default class AxiosAdapter implements HttpClient {
    async get(url: string): Promise<any> {
        const response = await axios({
            url,
            method: "GET",
        })
        return response.data
    }
}