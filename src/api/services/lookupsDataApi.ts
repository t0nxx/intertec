import httpClient from "../config/global-http-client";

export const lookupsDataEndpoint = async (serviceCode) => {
  const { data } = await httpClient.post("/LookupData/GetLookupDataList", {
    ServiceID: serviceCode,
  });

  return data;
};
