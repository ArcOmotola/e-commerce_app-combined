import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2YwMzFmY2ZlODFmYzBmNWVmZWVmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjY3Mjk2MiwiZXhwIjoxNjM2OTMyMTYyfQ.1aUqb0rROavKaVxyewoxgDlrY19hZh52E7LTkC5rOBA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});