import express, { Application, Request, Response} from 'express';
import 'dotenv/config'
import { router } from './router';


class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.router(); 
    
  }

  private config(): void {
    this.app.use(express.json());
  };

  private router(): void {
    this.app.use(router)
    this.app.get('/', (req: Request,
      res: Response) => res.json({ ok: true }));
  }


  public start(port: string | number): void {
    this.app.listen(port, () => console.log(`Running on port ${port} !`));
  }
}

export { App };

export const { app } = new App();
