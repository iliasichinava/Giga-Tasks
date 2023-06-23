import { createHash } from "crypto";
import { workerData, parentPort } from "worker_threads";

// Get the target value from the worker data
const { target } = workerData;

// Calculate the hash using the sha256 method
const hashedValue = sha256(target);

// Send the hashed value back to the main thread
parentPort?.postMessage(hashedValue);

function sha256(target: string): string {
  const result = createHash("sha256").update(target).digest("hex");
  return result;
}
