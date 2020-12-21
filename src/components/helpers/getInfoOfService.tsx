import { useSelector } from "react-redux";
import { infoDescriptionAndFeesDataEndpoint } from "../../api/services/stickyInfoDataApi";
import { StateSelectorInterface } from "../../redux/reducers/helper";

export const GetInfoOfCurrentService = async (serviceCode) => {
  const currentLnag = useSelector(
    (s: StateSelectorInterface) => s.configReducer.locale
  );
  const {
    Data: { DescriptionTable },
  } = await infoDescriptionAndFeesDataEndpoint(serviceCode);
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
};
