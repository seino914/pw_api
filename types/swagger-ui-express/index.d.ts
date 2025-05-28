// types/swagger-ui-express/index.d.ts
declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';

  interface SwaggerUiOptions {
    explorer?: boolean;
    swaggerOptions?: object;
    customCss?: string;
    customJs?: string;
    customfavIcon?: string;
    customSiteTitle?: string;
  }

  export const serve: RequestHandler;
  export function setup(swaggerDoc: object, options?: SwaggerUiOptions): RequestHandler;
}
