import { instance } from "../Axios";
export const UploadServer = async (files) => {
  const formData = new FormData();
  files.forEach(file => {
      formData.append('file', file);
  });
  return instance.post('/upload', formData);
}
