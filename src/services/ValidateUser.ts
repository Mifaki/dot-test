import axios from "axios";

export const validateUser = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    await axios.get(`${import.meta.env.VITE_AUTH_ENDPOINT}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (error) {
    localStorage.removeItem("token");
    return false;
  }
};
