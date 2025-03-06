import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            console.error("Acceso no autorizado, redirección a inicio de sesión...");
            if(typeof window !== "undefined"){
                localStorage.removeItem("token");
                window.location.href = "auth/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;