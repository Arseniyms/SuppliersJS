import fetcher from "./api";

const MAIL_API_PATH = '/mail/';

export class MailService {

    static async sendToMail(obj) {
        return fetcher(MAIL_API_PATH, {
            method: 'POST',
            body: JSON.stringify(obj)
        })
    }
}