import { HashService } from "./hash.service";
import { Worker } from "worker_threads";
import express from "express";

export class HashController {
  private readonly hashService: HashService;

  public constructor(hashService: HashService) {
    this.hashService = hashService;
  }

  public md5(req: express.Request, res: express.Response) {
    const { target } = req.body;
    const hashedValue = this.hashService.md5(target);
    res.send(hashedValue);
  }

  public sha256(req: express.Request, res: express.Response) {
    const { target } = req.body;
    const hashedValue = this.hashService.sha256(target);
    res.send(hashedValue);
  }

  public sync(req: express.Request, res: express.Response) {
    const worker = new Worker("./src/worker.ts");

    worker.on("loop", () => {
      console.log("Finished sync operation");
    });

    worker.emit("loop");

    res.send("Processing sync operation in the background");

  }

}
