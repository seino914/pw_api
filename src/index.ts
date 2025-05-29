import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './config/swagger';
import passwordRouter from './routes/password.routes';

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェア
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ルート
app.use('/password', passwordRouter);

// ヘルスチェック
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Password Strength API is running' });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
