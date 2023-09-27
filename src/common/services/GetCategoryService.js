import { instance } from "../Axios";

export const getCategoryApi = () => {
    return instance
        .get('/category')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
