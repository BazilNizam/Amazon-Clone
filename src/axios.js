import axios from "axios";

const instance = axios.create({
    
    baseURL: 'http://localhost:5001/challenge-48601/us-central1/api' /// API URL(cloud function)

});
export default instance;