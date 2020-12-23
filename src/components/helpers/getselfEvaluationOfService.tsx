import { useSelector } from "react-redux";
import { selfEvaluationEvaDataEndpoint } from "../../api/services/selfEvaluationDataApi";
import { StateSelectorInterface } from "../../redux/reducers/helper";

export const GetSelfEvaluationService = async (serviceCode) => {
  const currentLnag = useSelector(
    (s: StateSelectorInterface) => s.configReducer.locale
  );
  const {
    Data: { SelfEvaluationChecklist },
  } = await selfEvaluationEvaDataEndpoint(serviceCode);
  let data: any[] = [];
  data = [...SelfEvaluationChecklist];
  if (currentLnag === "en") {
    // description = DescriptionTable[0].DescriptionEN;
    // fees = DescriptionTable[0].RequiredFeeEn;
  } else {
    // description = DescriptionTable[0].DescriptionAR;
    // fees = DescriptionTable[0].RequiredFeeAr;
  }

  return { data };
};
