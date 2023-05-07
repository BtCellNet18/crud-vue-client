import axios from 'axios';

export default axios.create({
  baseURL: "https://webapi20200129025509.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});