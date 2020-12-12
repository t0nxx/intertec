export interface IProps {
  isForReviewPage: boolean;
  // this is optional prop ,which aim to change the toggle state of parent ..ie show or hide collapse
  // it just fire event
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmitOrCancelEvent?: any;
}
