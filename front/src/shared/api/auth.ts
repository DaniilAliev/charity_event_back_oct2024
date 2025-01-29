import { BaseService } from ".";

class AuthService extends BaseService {
    constructor() {
        super('api')
    }
    auth({login, password}: {login: string, password: string}) {
        return this.httpClient.post(this.getPath('/auth'), {
            login,
            password
        })
    }
}

const authService = new AuthService();

export default authService;