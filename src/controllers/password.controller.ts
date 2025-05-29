import { Request, Response } from 'express';
import { evaluatePassword } from '../utils/password.utils';
import { PasswordRequest, PasswordResponse, PasswordError } from '../types/password.types';

export const scorePassword = (
  req: Request<{}, {}, PasswordRequest>,
  res: Response<PasswordResponse | PasswordError>
): void => {
  const { password } = req.body;

  if (typeof password !== 'string') {
    res.status(400).json({ error: 'パスワードは文字列型にしてください。' });
    return;
  }

  const result = evaluatePassword(password);
  res.json(result);
};
