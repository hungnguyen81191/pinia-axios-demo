import axios from "axios";

const userUrl = `${process.env.VUE_APP_BASE_URL}users`

export function getAllUsers(){
    return axios.get(userUrl);
}