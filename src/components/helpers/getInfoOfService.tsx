import { infoDescriptionAndFeesDataEndpoint } from "../../api/services/stickyInfoDataApi";
import { getCurrentLang } from "../../utils/currentLang";

export async function GetInfoOfCurrentService(serviceCode) {
  const {
    Data: { DescriptionTable },
  } = await infoDescriptionAndFeesDataEndpoint(serviceCode);
  const currentLnag = getCurrentLang();
  let description,
    fees = "";
  if (currentLnag === "en") {
    description = DescriptionTable[0].DescriptionEN;
    fees = DescriptionTable[0].RequiredFeeEn;
  } else {
    description = DescriptionTable[0].DescriptionAR;
    fees = DescriptionTable[0].RequiredFeeAr;
  }

  return { description, fees };
}
