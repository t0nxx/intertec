import httpClient from "../config/global-http-client";

export const attachmentsDataEndpoint = async (serviceCode) => {
  const { data } = await httpClient.post(
    "/LookupData/GetAttachmentTypesListBasedOnServiveCode",
    {
      ServiceCode: serviceCode,
    }
  );

  return data;
};
