import { parentPort, workerData } from "worker_threads";

sync();
  
function sync() {
    console.log("Sync operation started");
    for (let i = 0; i < 1_000_000_0000; i++) {}
    console.log("FINISHED");
    // Send a message to the main thread indicating that the sync operation is finished
    parentPort?.postMessage("syncFinished");
}