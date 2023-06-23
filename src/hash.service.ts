import { createHash } from "crypto";

export class HashService {
  public constructor() {}

  public sha256(target: string): string {
    const result = createHash("sha256").update(target).digest("hex");
    return result;
  }

  public md5(target: string): string {
    const result = createHash("md5").update(target).digest("hex");
    return result;
  }
}
