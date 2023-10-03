import { instance } from "../Axios";
export const getMessagesApi = (id) => {
    return instance
        .get(`/get_messages/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
