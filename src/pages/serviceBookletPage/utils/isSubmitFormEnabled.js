export const isSubmitFormEnabled = (formState) => {
  if ((formState?.isIssue === '' || formState?.isIssue === false) && (formState?.status === '' || formState?.status === false)) {
    return true;
  } else if (formState?.isIssue !== '' && formState?.isIssue !== false && formState?.issues === '') {
    return true;
  } else {
    return false;
  }
};
