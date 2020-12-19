import httpClient from "../config/global-http-client";

export const lookupsDataEndpoint = async () => {
  const { data } = await httpClient.post("/LookupData/GetLookupDataList", {});
  console.log("from axiosss");
  console.log(data);
  return data;
};
