import httpClient from "../config/global-http-client";

export const lookupsData = async () => {
  const { data } = await httpClient.post("/LookupData/GetLookupDataList");
  return data;
};
