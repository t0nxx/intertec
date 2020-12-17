import { Slide, toast } from "react-toastify";

/**
 * This toast functions are used to provide 4 types of toast
 * Info, Error, Warning, Success, Default
 */
const common = {
  autoClose: 5000,
  closeButton: true,
  position: "top-right",
  transition: Slide,
};

/**
 * This will show toast
 * @param msg
 * @returns {React.ReactText}
 */
export const showToast = (msg) => {
  return toast(msg, {
    ...common,
  });
};

/**
 * This will show info toast to user
 * @param msg
 * @returns {React.ReactText}
 */
export const infoToast = (msg) => {
  return toast.info(msg, {
    ...common,
  });
};

/**
 * This will show error toast to user
 * @param msg
 * @returns {React.ReactText}
 */
export const errorToast = (msg) => {
  return toast.error(msg, {
    ...common,
  });
};

/**
 * This will show success toast
 * @param msg
 * @returns {React.ReactText}
 */
export const successToast = (msg) => {
  return toast.success(msg, {
    ...common,
  });
};

/**
 * This will show warning toast
 * @param msg
 * @returns {React.ReactText}
 */
export const warningToast = (msg) => {
  return toast.warning(msg, {
    ...common,
  });
};
