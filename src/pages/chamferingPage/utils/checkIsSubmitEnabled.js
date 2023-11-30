const checkIsSubmitEnabled = (formState) => {
  const { differenceFromPingink, diffrentFromQC, timeOfChamfering } = formState;
  if ((differenceFromPingink !== '' || diffrentFromQC !== '') && timeOfChamfering !== '') {
    return true;
  } else {
    return false;
  }
};
export default checkIsSubmitEnabled;
