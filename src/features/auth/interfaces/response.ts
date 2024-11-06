export interface LoginResponse {
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  roles: string[];
  token: string;
}

export interface RegisterResponse {
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  roles: string[];
  token: string;
}

export interface CheckAuthResponse {
  email: string;
  id: string;
  name: string;
  token: string;
}
