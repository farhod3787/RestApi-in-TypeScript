import { Application } from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  }
}