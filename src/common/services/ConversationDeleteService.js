import { instance } from "../Axios";

export const deleteConversationApi = async (id) => {
    return instance
        .delete(`/delete_conv/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};