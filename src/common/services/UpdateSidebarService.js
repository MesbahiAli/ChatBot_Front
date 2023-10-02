import axios from 'axios';

export const updateChatTitleService = (index, newTitle) => {
    return axios.put(`http://127.0.0.1:5000/title_edit/${index}`, {
        title: newTitle
    });
}
