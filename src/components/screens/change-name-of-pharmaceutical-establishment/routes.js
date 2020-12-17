import {
  ChangeNameOfPharmaceuticalEstablishment,
  FinalAttachment,
  NameChangePayment,
  ReviewerComment,
} from "./index";

const changeNameOfPharmaceuticalEstablishmentRoutes = [
  {
    path: "/change-name-of-pharmaceutical-establishment",
    exact: true,
    Component: ChangeNameOfPharmaceuticalEstablishment,
  },
  {
    path: "/change-name-of-pharmaceutical-establishment/payment",
    exact: true,
    Component: NameChangePayment,
  },
  {
    path: "/change-name-of-pharmaceutical-establishment/review-comment",
    exact: true,
    Component: ReviewerComment,
  },
  {
    path: "/change-name-of-pharmaceutical-establishment/final-attachment",
    exact: true,
    Component: FinalAttachment,
  },
];

export default changeNameOfPharmaceuticalEstablishmentRoutes;
