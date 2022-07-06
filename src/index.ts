import 'source-map-support/register';
import OpenAPIBackend from 'openapi-backend';
import Express from 'express';
import morgan from 'morgan';

import type { Request } from 'openapi-backend';

const app = Express();
app.use(Express.json());

// define api
const api = new OpenAPIBackend({
  definition: './_build/openapi.yaml'
});

api.register('notImplemented', (c, req, res) => {
  const { status, mock } = c.api.mockResponseForOperation(c.operation.operationId);
  return res.status(status).json(mock);
});

api.init();

// logging
app.use(morgan('combined'));

// use as express middleware
app.use((req, res) => api.handleRequest(req as Request, req, res));

// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));
