import { instance } from "../Axios";
export const getPdfData = (filename) => {
    return instance
        .get(`/view/${filename}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
