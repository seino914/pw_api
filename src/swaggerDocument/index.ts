// SwaggerドキュメントのJSON
export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Sample API',
    version: '1.0.0',
  },
  paths: {
    '/': {
      get: {
        summary: 'Hello API',
        responses: {
          '200': {
            description: 'Returns a hello message',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/password/score': {
    post: {
      summary: 'Evaluate password strength',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                password: { type: 'string' },
              },
              required: ['password'],
            },
          },
        },
      },
      responses: {
        '200': {
          description: 'Password strength score',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  score: { type: 'number' },
                  verdict: { type: 'string' },
                  feedback: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
};
