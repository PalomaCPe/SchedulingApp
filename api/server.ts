import * as express from 'express';
import { Response, Request } from 'express';
import * as http from 'http';
import * as path from 'path';
import { json } from 'body-parser';

import { bookingRouter } from './service/booking.service';
import { customerRouter } from './service/customer.service';
import { roleRouter } from './service/role.service';
import { professionalRouter } from './service/professional.service';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../')));
app.use(json());

// Route Configuration
app.use('/api/booking/', bookingRouter);
app.use('/api/customer/', customerRouter);
app.use('/api/role/', roleRouter);
app.use('/api/professional', professionalRouter);

app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '../index.html'));
});

// Server Configuration
const server: http.Server = http.createServer(app);
server.listen(3000);

export { app }