import { AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseError } from "./BaseError";

export class HttpError extends BaseError {
  public config : AxiosRequestConfig;
  public request : XMLHttpRequest;
  public response : AxiosResponse;

  constructor(message : string, config : AxiosRequestConfig, request : XMLHttpRequest, response : AxiosResponse) {
    super(message);

    this.config = config;
    this.request = request;
    this.response = response;
  }
}