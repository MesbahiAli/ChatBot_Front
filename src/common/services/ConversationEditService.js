import { instance } from "../Axios";

export const editConversationApi = async (payload) => {
    return instance
        .put(`/title_edit`, payload)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};