import axios from 'axios';

const BASE_URL = "http://localhost:3001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjZjMWI3ZjhjOWU2Y2Q4OWUzNjJiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTY0NTkzNSwiZXhwIjoxNjM5OTA1MTM1fQ.j2V3OYCDrYjbPPwqiHBMeBJ2-YoEdkM4nkiPWEfltRs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: {token: `Bearer ${TOKEN}` }
});