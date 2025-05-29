import zxcvbn from 'zxcvbn';

const warningMap: { [key: string]: string } = {
  'Straight rows of keys are easy to guess': 'キーボード上の連続した文字列は推測されやすいです',
  'Short keyboard patterns are easy to guess': '短いキーボードパターンは推測されやすいです',
  'Repeats like "aaa" are easy to guess': '"aaa"のような繰り返しは推測されやすいです',
  'Repeats like "abcabcabc" are only slightly harder to guess than "abc"':
    '"abcabcabc"のような繰り返しは"abc"よりもわずかに推測されにくい程度です',
  'Sequences like "abc" or "6543" are easy to guess':
    '"abc"や"6543"のような連続した文字列は推測されやすいです',
  'Recent years are easy to guess': '最近の年号は推測されやすいです',
  'Dates are often easy to guess': '日付は推測されやすいです',
  'This is a very common password': 'これは非常によくあるパスワードです',
  'This is similar to a commonly used password': 'これはよく使われるパスワードに似ています',
  'A word by itself is easy to guess': '単語だけのパスワードは推測されやすいです',
};

const suggestionMap: { [key: string]: string } = {
  'Add another word or two. Uncommon words are better.':
    '単語をもう1〜2個追加してください。一般的でない単語の方が良いです。',
  'Use a longer keyboard pattern': 'より長いキーボードパターンを使用してください',
  'Avoid repeated words and characters': '単語や文字の繰り返しを避けてください',
  'Avoid sequences': '連続した文字列を避けてください',
  'Avoid recent years': '最近の年号を避けてください',
  'Avoid dates and years that are associated with you':
    'あなたに関連する日付や年号を避けてください',
  "Capitalization doesn't help very much": '大文字小文字の切り替えはあまり効果がありません',
  'All-uppercase is almost as easy to guess as all-lowercase':
    '全て大文字は全て小文字と同じくらい推測されやすいです',
  "Reversed words aren't much harder to guess": '逆順の単語は推測されにくくはありません',
  "Predictable substitutions like '@' instead of 'a' don't help very much":
    "'a'の代わりに'@'を使うような予測可能な置き換えはあまり効果がありません",
};

export const translateFeedback = (feedback: {
  warning?: string;
  suggestions: string[];
}): string => {
  const messages: string[] = [];

  if (feedback.warning) {
    const translatedWarning = warningMap[feedback.warning] || feedback.warning;
    messages.push(translatedWarning);
  }

  const translatedSuggestions = feedback.suggestions.map(
    (suggestion) => suggestionMap[suggestion] || suggestion
  );
  messages.push(...translatedSuggestions);

  return messages.length > 0 ? messages.join(' ') : 'とても良いです！';
};

export const evaluatePassword = (password: string) => {
  const result = zxcvbn(password);
  const verdicts = ['非常に弱い', '弱い', '普通', '強い', '非常に強い'];

  return {
    score: result.score,
    verdict: verdicts[result.score],
    feedback: translateFeedback(result.feedback || { warning: '', suggestions: [] }),
  };
};
