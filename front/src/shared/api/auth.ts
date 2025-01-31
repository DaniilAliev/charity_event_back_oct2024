import { BaseService } from ".";
import Cookies from 'js-cookie';

const COOKIE_NAME = 'jwt_auth';

class AuthServiceClass extends BaseService {
    constructor() {
        super('api')
    }
    auth({login, password}: {login: string, password: string}) {
        return this.httpClient.post(this.getPath('/auth'), {
            login,
            password
        })
    }

    setCookie(token: string) {
        Cookies.set(COOKIE_NAME, token);
    }

    getCookie() {
        return Cookies.get(COOKIE_NAME);
    }

    removeCookie() {
        Cookies.remove(COOKIE_NAME);
    }

    logout() {
        this.removeCookie();
    }
}

const AuthService = new AuthServiceClass();

export default AuthService;