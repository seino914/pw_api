import express from "express";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

// SwaggerドキュメントのJSON
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Sample API",
    version: "1.0.0",
  },
  paths: {
    "/hello": {
      get: {
        summary: "Hello API",
        responses: {
          "200": {
            description: "Returns a hello message",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
