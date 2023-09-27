import { instance } from "../Axios";

export const getCategoryApi = () => {
    return instance
        .get('/get_files')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
