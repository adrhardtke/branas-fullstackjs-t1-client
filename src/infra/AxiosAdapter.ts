import axios, { AxiosInterceptorManager, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import HttpClient from "./Http";

export default class AxiosAdapter implements HttpClient {
    router: any

    constructor(){
        axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Bearer ${token}`
            return config
        })
        axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if(error.response.status === 401){
                this.router.push('/login')
            }
            return Promise.reject(error);
        })
    }

    setRouter(router: any){
        this.router = router;
    }

    async get(url: string): Promise<any> {
        const response = await axios({
            url,
            method: "GET",
        })
        return response.data
    }
}