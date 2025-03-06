import fetcher from "./api";

const API_PATH = '/users/';

export class CompanyService {

    static async getAllCompanies() {
        return fetcher(API_PATH);
    }

    static async getCompany(companyId) {
        return fetcher(`${API_PATH}${companyId}`);
    }

    static async updateCompany(obj) {
        return fetcher(API_PATH, {
            method: 'PATCH',
            body: JSON.stringify(obj)
        });
    }

    static async addCompany(obj) {
        return fetcher(API_PATH, {
            method: 'POST',
            body: JSON.stringify(obj)
        });
    }
}
