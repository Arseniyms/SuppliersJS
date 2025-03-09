import fetcher from "./api";
import {LocalStorage} from "./useLocalStorage";

const LOGIN_API_PATH = '/login/';
const LOCAL_TOKEN_KEY = "token"

export class LoginService {

    static async login(admin) {
        return fetcher(LOGIN_API_PATH, {
            method: 'POST',
            body: JSON.stringify(admin)
        });
    }

    static async isLogged(token) {
        return fetcher(LOGIN_API_PATH, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
    }

    static async validateToken() {
        return fetcher(LOGIN_API_PATH)
    }

    static isAuthenticated() {
        const { getItem } = LocalStorage(LOCAL_TOKEN_KEY)
        const token = getItem();

        return token && token !== "";
    }
}