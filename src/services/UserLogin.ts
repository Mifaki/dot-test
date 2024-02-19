import axios from "axios";

export const userLogin = async (
    username: string,
    password: string
): Promise<any> => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_AUTH_ENDPOINT}/login`, {
        username,
        password,
        expiresInMins: 60
    })

    const data = response.data;
    localStorage.setItem('token', data.token);
  } catch (error) {
    console.error(error);
  }
};
