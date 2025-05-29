export interface PasswordRequest {
  password: string;
}

export interface PasswordResponse {
  score: number;
  verdict: string;
  feedback: string;
}

export interface PasswordError {
  error: string;
}
