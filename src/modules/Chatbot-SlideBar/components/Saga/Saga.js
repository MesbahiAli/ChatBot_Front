import axios from 'axios';

export function* sendFilesToServer(action) {
  try {
    const formData = new FormData();
    action.payload.forEach(file => {
      formData.append('files', file);
    });

    const response = yield axios.post('/server/upload-endpoint', formData);

    // Handle response
  } catch (error) {
    console.error('Error uploading files:', error);
  }
}
