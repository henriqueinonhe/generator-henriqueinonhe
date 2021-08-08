import { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpError } from "./HttpError";

export class ServerError extends HttpError {
  constructor(message : string, config : AxiosRequestConfig, request : XMLHttpRequest, response : AxiosResponse) {
    super(message, config, request, response);
  }
}