import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('hellooo');
    if (req.method === 'POST') {
      console.log(`[${new Date().toISOString()}] Body:`, req.body);
    }
    next();
  }
}
// functional middleware
