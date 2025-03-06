
const API_URL = 'http://127.0.0.1:9090';

const fetcher = async (url, options) => {
    const URL = `${API_URL}${url}`;
    const response = await fetch(URL, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default fetcher;