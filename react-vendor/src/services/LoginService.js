import fetcher from "./api";

const LOGIN_API_PATH = '/login/';

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
}