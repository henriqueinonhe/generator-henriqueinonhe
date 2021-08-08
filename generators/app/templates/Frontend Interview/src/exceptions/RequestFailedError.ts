import { AxiosRequestConfig } from "axios";
import { BaseError } from "./BaseError";

export class RequestFailedError extends BaseError {
  public config : AxiosRequestConfig;
  public request : XMLHttpRequest;

  constructor(message : string, config : AxiosRequestConfig, request : XMLHttpRequest) {
    super(message);

    this.config = config;
    this.request = request;
  }
}