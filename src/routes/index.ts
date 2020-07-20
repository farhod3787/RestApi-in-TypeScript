import { Application} from "express";
import { urlencoded, json } from "body-parser";
import { Routes } from "./routes";

export class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(urlencoded({ extended: true }));
    app.use(json());
  }
}