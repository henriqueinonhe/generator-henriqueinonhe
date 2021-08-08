import { BaseError } from "./BaseError";

export class RequestCanceledError extends BaseError {
  constructor(message : string) {
    super(message);
  }
}