// conversationService.js

import { instance } from "../Axios";

export const getConversationsApi = () => {
    return instance
        .get('/get_conversations/admin')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
