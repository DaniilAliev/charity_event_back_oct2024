import axios, { AxiosInstance } from 'axios'
import urlJoin from 'url-join'

export class BaseService {
    protected httpClient: AxiosInstance
    private endpoint: string;
    private apiHost: string;

  constructor(endpoint: string) {
    this.httpClient = axios
    this.endpoint = endpoint
    this.apiHost = import.meta.env.VITE_API_HOST
  }

  getPath(...path: string[]): string {
    return urlJoin(this.apiHost, this.endpoint, ...path);
}
}