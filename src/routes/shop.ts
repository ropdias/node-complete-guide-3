import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

// You use rootDir here because you can't get an absolute path to the
// folder of the app.js file if you use path.join(__dirname, "views", "shop.html") directly here
// You could use path.join(__dirname, '..', "views", "shop.html")
import { rootDir } from '../util/path';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;
