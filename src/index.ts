import express from "express";
import { router } from "./routes";

class App {
  private readonly app: express.Express;

  public constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(router);
  }

  public listen() {
    this.app.listen(3000, () => {
      console.log("Server is listening on " + 3000);
    });
  }
}

const app = new App();
app.listen();
