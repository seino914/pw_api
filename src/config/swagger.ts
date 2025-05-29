export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'パスワード強度チェックAPI',
    version: '1.0.0',
    description: 'パスワードの強度を評価し、フィードバックを提供するAPI',
  },
  paths: {
    '/password': {
      post: {
        tags: ['Password'],
        summary: 'パスワードの強度を評価',
        description: 'パスワードの強度をスコアリングし、詳細なフィードバックを提供します',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  password: {
                    type: 'string',
                    description: '評価するパスワード',
                  },
                },
                required: ['password'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'パスワードの強度スコア',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    score: {
                      type: 'number',
                      description: '強度スコア（0-4）',
                      minimum: 0,
                      maximum: 4,
                    },
                    verdict: {
                      type: 'string',
                      description: '強度の判定（非常に弱い、弱い、普通、強い、非常に強い）',
                    },
                    feedback: {
                      type: 'string',
                      description: '改善のためのアドバイス',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'バリデーションエラー',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      description: 'エラーメッセージ',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
