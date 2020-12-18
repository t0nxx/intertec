import AttachmentScreenComponent from "./attachment-screen/attachment-screen";
import PaymentScreenComponent from "./payment-screen/payment-screen";
import PharamaceuticalEstablishmentScreen from "./pharamaceutical-establishment-screen/pharamaceutical-establishment";
import ReviewScreenComponent from "./review-screen/review-screen";
import SuccessScreenComponent from "./success-screen/success-screen";

const NewLicensePharmaceuticalEstablishmentRoutes = [
  {
    path: "/new-license-pharmaceutical-establishment",
    exact: true,
    Component: PharamaceuticalEstablishmentScreen,
  },
  {
    path: "/new-license-pharmaceutical-establishment/payment",
    exact: true,
    Component: PaymentScreenComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/review",
    exact: true,
    Component: ReviewScreenComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/attachment",
    exact: true,
    Component: AttachmentScreenComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/success",
    exact: true,
    Component: SuccessScreenComponent,
  },
];

export default NewLicensePharmaceuticalEstablishmentRoutes;
