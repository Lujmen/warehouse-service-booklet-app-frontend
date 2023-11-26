export const checkIfShouldBeDisabledForChamferingTime = (data) => {
  if (typeof data?.startDate !== 'undefined' && typeof data?.endDate !== 'undefined' && data?.key === 'time') {
    return true;
  } else {
    return false;
  }
};
export const checkIfShouldBeDisabledForChamferingList = (data) => {
  if (typeof data?.startDate !== 'undefined' && typeof data?.endDate !== 'undefined' && data?.key === 'list') {
    return true;
  } else {
    return false;
  }
};
