import axios from "axios";

const URL = "http://localhost:3000/auth";

interface SignupUser {
    username: string;
    email: string;
    password: string;
}
interface LoginUser {
    username: string;
    email: string;
    password: string;
}

export const api = {
    signup: async (user: SignupUser) => {
        console.log(user)
        const { data } = await axios.post(`${URL}/signup`, user);
        console.log(data)
        return data;
    },

    login: async (user: LoginUser) => {
        const { data } = await axios.post(`${URL}/login`, user);
        return data;
    },

    getProfile: async (token: string) => {
        const { data } = await axios.get(`${URL}/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return data;
    },
};
