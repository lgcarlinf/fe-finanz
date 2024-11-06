import axios from "axios";
import { CreateUserDto } from "../dto/register";
import { LoginUserDto } from "../dto/login";
import {
  CheckAuthResponse,
  LoginResponse,
  RegisterResponse,
} from "../interfaces/response";

export const AUTH_KEY = ["auth"];

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

class AuthApi {
  async login(loginData: LoginUserDto): Promise<LoginResponse> {
    const { data } = await api.post("/auth/login", loginData);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    return data;
  }

  async register(userData: CreateUserDto): Promise<RegisterResponse> {
    const { data } = await api.post("/auth/register", userData);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    return data;
  }

  async checkAuth(): Promise<CheckAuthResponse> {
    const { data } = await api.get("/auth/check-status");
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  }

  async logout() {
    delete api.defaults.headers.common["Authorization"];
  }
}

export const authApi = new AuthApi();
