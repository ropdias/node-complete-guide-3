import path from 'path';

import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app = express();

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req: Request, res: Response) => res.sendStatus(204));

app.use('/admin', adminRoutes); // This will import all the routes in the admin.js in here. The middleware order still matters.
app.use(shopRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
