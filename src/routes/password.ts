import { Router } from 'express';
import zxcvbn from 'zxcvbn';

const router = Router();

export default router.post('/score', (req, res) => {
  const { password } = req.body;
  if (typeof password !== 'string') {
    return res.status(400).json({ error: 'パスワードは文字列型にしてください。' });
  }

  const result = zxcvbn(password);
  const verdicts = ['非常に弱い', '弱い', '普通', '強い', '非常に強い'];

  res.json({
    score: result.score,
    verdict: verdicts[result.score],
    feedback: result.feedback?.suggestions.join(' ') || 'とても良いです！',
  });
});
