import {LocalStorage} from "./useLocalStorage";

const API_URL = 'http://127.0.0.1:9090';
const LOCAL_TOKEN_KEY = "token"

const fetcher = async (url, options) => {
    const URL = `${API_URL}${url}`;

    const {getItem} = LocalStorage(LOCAL_TOKEN_KEY)

    const item = getItem();
    if (item !== undefined) {
        options = options || {}
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${getItem()}`;
    }

    const response = await fetch(URL, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default fetcher;