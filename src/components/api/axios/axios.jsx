import axios from "axios";

export default axios.create({
  baseURL: 'https://touristapp-backend-production.up.railway.app/'
})