import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

// You use rootDir here because you can't get an absolute path to the
// folder of the app.js file if you use path.join(__dirname, "views", "add-product.html") directly here
// You could use path.join(__dirname, '..', "views", "add-product.html")
import { rootDir } from '../util/path';

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
