import { instance } from "../Axios";

export const editCategoryEdit = (payload) => {
    return instance
        .post("/update-file", payload)
        .then((response) => {
            return response;
        });
};
