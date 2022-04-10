import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import ErrorHandler from './middlewares/ErrorMiddleware';
import Logger from './config/logger';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import Session from './config/session.config';
declare module "express-session" {
  interface SessionData {
    user: string;
    isAuth: boolean;
  }
}
class App {

  public app: Application;
  public host: string;
  public port: number | string;
  private logStream = Logger.logStream;
  private logger = Logger.logger;
  public errorHandler = new ErrorHandler();
  constructor() {
    this.app = express();
    this.host = process.env.APP_HOST ?? '';
    this.port = process.env.APP_PORT ?? '';
    this.initializeMiddleWares();
    this.initializeRoutes();
    this.initializeErrorHandlers();
    this.startApp();
  }
  public initializeMiddleWares(): void {
    this.app.use(cors(
      {
        credentials: true,
        // allowedHeaders: 'Content-Type',
        // origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: true,
        optionsSuccessStatus: 204
      }
    ));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('combined', { stream: this.logStream }));

    // initialize cookie-parser to allow us access the cookies stored in the browser.
    this.app.use(cookieParser());

    // initialize express-session to allow us track the logged-in user across sessions.
    this.app.use(
      session(Session)
    )
  }
  public initializeRoutes(): void {
    this.app.use(`/`, routes());
  }
  public initializeErrorHandlers(): void {
    this.app.use(this.errorHandler.appErrorHandler);
    this.app.use(this.errorHandler.genericErrorHandler);
    this.app.use(this.errorHandler.notFound);
  }
  public startApp(): void {
    this.app.listen(this.port, () => {
      this.logger.info(
        `Server started at ${this.host}:${this.port}`
      );
    });
  }
  public getApp(): Application {
    return this.app;
  }
}

const app = new App();

export default app;
