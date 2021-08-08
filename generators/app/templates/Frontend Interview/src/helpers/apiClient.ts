import axios from "axios";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthenticationError } from "../exceptions/AuthenticationError";
import { AuthorizationError } from "../exceptions/AuthorizationError";
import { RequestCanceledError } from "../exceptions/RequestCanceledError";
import { RequestFailedError } from "../exceptions/RequestFailedError";
import { ResourceNotFoundError } from "../exceptions/ResourceNotFoundError";
import { ServerError } from "../exceptions/ServerError";

export interface AxiosResponseError {
  config : AxiosRequestConfig;
  response : AxiosResponse;
  request : XMLHttpRequest;
  message : string;
}

const baseURL = process.env.TEST_ENVIRONMENT === "true" ?
  "https://localhost:8080/api" : process.env.API_BASE_URL;

export const apiClient = Axios.create({
  baseURL
});

function onFulfilledRequestInterceptor(value : AxiosRequestConfig) : AxiosRequestConfig {
  return value;
}

function onRejectedRequestInterceptor(error : AxiosRequestConfig) : void {
  throw error;
}

function onFulfilledResponseInterceptor(value : AxiosResponse) : AxiosResponse {
  return value;
}

function onRejectedResponseInterceptor(error : AxiosResponseError) : void {
  if(axios.isCancel(error)) {
    throw new RequestCanceledError("Request canceled!");
  }

  const config = error.config;
  const request = error?.request;
  const response = error?.response;
  const status = response?.status;

  if(response === undefined) {
    throw new RequestFailedError("HTTP request failed!", config, request);
  }

  if(status === 401) {
    throw new AuthenticationError("Failed to authenticate!", config, request, response);
  }

  if(status === 403) {
    throw new AuthorizationError("Authorization error!", config, request, response);
  }

  if(status === 404) {
    throw new ResourceNotFoundError("Resource not found!", config, request, response);
  }

  if(status === 500) {
    throw new ServerError("Something went wrong!", config, request, response);
  }
}

apiClient.interceptors.request.use(onFulfilledRequestInterceptor, onRejectedRequestInterceptor);
apiClient.interceptors.response.use(onFulfilledResponseInterceptor, onRejectedResponseInterceptor);