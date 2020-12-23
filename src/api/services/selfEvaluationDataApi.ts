import httpClient from "../config/global-http-client";

export const selfEvaluationEvaDataEndpoint = async (
  ServiceCode: string
) => {
  const { data } = await httpClient.post(
    "/CommonService/GetSelfEvaluationChecklist",
    {
      ServiceCode,
    }
  );

  return data;
};
