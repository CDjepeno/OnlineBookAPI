import { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { MethodHttpEnum } from "../../request/route-http/route-http";
import { restRequestApiInstance } from "./restRequestApiInstance";

export const UseRequest = async <TData, T>(
  baseURL: string,
  path: string,
  method: MethodHttpEnum,
  params?: T,
  headers?: RawAxiosRequestHeaders
): Promise<TData> => {
  const config: AxiosRequestConfig = {
    headers,
    ...(method === MethodHttpEnum.GET ? { params } : {}),
  };
  const response = await restRequestApiInstance(baseURL, headers)[method](
    path,
    method === MethodHttpEnum.GET
      ? config
      : headers?.["Content-Type"] === "multipart/form-data"
      ? params
      : { ...params }
  );
  return response.data;
};
