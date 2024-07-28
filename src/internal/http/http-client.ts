import axios, { AxiosInstance, AxiosResponse } from "axios";

class HttpClientService {
    private readonly api: AxiosInstance;

    constructor(baseURL: string) {

        if (!baseURL) {
            const message = "Base url is not defined!";

            console.log(message);

            throw new Error(message);
        }

        this.api = axios.create({
            baseURL
        });
        this.api.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');

                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }

                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    get<T, R>(url: string, params?: T): Promise<AxiosResponse<R>> {
        return this.api.get<R>(url, { params });
    }

    post<T, R>(url: string, data: T): Promise<AxiosResponse<R>> {
        return this.api.post<R>(url, data);
    }

    put<T, R>(url: string, data: T): Promise<AxiosResponse<R>> {
        return this.api.put<R>(url, data);
    }

    delete<R>(url: string): Promise<AxiosResponse<R>> {
        return this.api.delete<R>(url);
    }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default new HttpClientService(API_BASE_URL);