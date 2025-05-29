import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swaggerDocument';
import passwordRouter from './routes/password/score';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/password', passwordRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
