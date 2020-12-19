import httpClient from "../config/global-http-client";

export const infoDescriptionAndFeesDataEndpoint = async (
  ServiceCode: string
) => {
  const { data } = await httpClient.post(
    "/CommonService/GetCommonRequiredServiceCatlog",
    {
      ServiceCode,
    }
  );

  return data;
};
