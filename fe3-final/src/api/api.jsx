const URL_API = 'https://jsonplaceholder.typicode.com/users'

export async function getDentists() {
    const result = {};
    try {
        const response = await fetch(URL_API);
        const data = await response.json();
        result.data = data;
    } catch (error) {
        result.error = error;
    }
    return result;
}

export async function getDentistById(id) {
    const result = {};
    try {
        const response = await fetch(`${URL_API}/${id}`);
        const data = await response.json();
        result.data = data;
    } catch (error) {
        result.error = error;
    }
    return result;
}