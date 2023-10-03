import { instance } from "../Axios";
export const ApiFetchCategoryForm = () => {
    return instance
        .get(`/categories`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
