import AttachmentScreenComponent from "./attachment-screen/attachment-screen";
import PaymentScreenComponent from "./pharamaceutical-establishment-screen/payment-screen/payment-screen";
import PharmacedicalEstablishmentAttachmentComponent from "./pharamaceutical-establishment-screen/attachment/pharmacedical-establishment-attachment";
import PharamaceuticalEstablishmentScreen from "./pharamaceutical-establishment-screen/pharamaceutical-establishment";
import ReviewScreenComponent from "./pharamaceutical-establishment-screen/review-screen/review-screen";
import SuccessScreenComponent from "./success-screen/success-screen";
import RelocationLicenseScreen from "./relocation-license-screen/relocation-license-screen";

const NewLicensePharmaceuticalEstablishmentRoutes = [
  {
    path: "/new-license-pharmaceutical-establishment",
    exact: true,
    Component: PharamaceuticalEstablishmentScreen,
  },
  {
    path: "/new-license-pharmaceutical-establishment/attachment",
    exact: true,
    Component: PharmacedicalEstablishmentAttachmentComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/review",
    exact: true,
    Component: ReviewScreenComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/payment",
    exact: true,
    Component: PaymentScreenComponent,
  },
  {
    path: "/new-license-pharmaceutical-establishment/success",
    exact: true,
    Component: SuccessScreenComponent,
  },
  {
    path: "/relocation-license-pharmaceutical",
    exact: true,
    Component: RelocationLicenseScreen,
  },
  {
    path: "/relocation-license-pharmaceutical/attachment",
    exact: true,
    Component: AttachmentScreenComponent,
  },
];

export default NewLicensePharmaceuticalEstablishmentRoutes;
