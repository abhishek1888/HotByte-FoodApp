import axios from "axios";

 const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
 const currentUser = user && JSON.parse(user).currentUser;
 const TOKEN = currentUser?.jwtToken;
 console.log(currentUser)
export const userInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
    }
});

export const publicInstance = axios.create({
    baseURL: 'http://localhost:8080'
});