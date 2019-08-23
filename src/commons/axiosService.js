import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    this.instance=instance
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(uri){
    return this.instance.get(url)
  }
}
export default new AxiosService();
