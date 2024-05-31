import path from 'path';

import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'views', 'assignment3-users.html'));
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'views', 'assignment3-home.html'));
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'views', 'assignment3-404.html'));
});

app.listen(3000);
