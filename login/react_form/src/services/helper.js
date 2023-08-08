import axios from "axios"

export const BASE_URL='http://localhost:8080/api/user/save';

export const myAxios = axios.create({
baseURL: BASE_URL,
});