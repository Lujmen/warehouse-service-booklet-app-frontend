export const checkIsSubmitFormEnabled = (info) => {
  console.log(typeof info);
  if (info === '' || typeof info === 'undefined') {
    return false;
  } else {
    return true;
  }
};
