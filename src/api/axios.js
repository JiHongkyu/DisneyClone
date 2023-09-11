import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'df78cb276471b63d926aa96d864ee7cf',
    language: 'ko-KR'
  }
});

export default instance;
