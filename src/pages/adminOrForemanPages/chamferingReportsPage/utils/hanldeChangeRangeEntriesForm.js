export function handleEndDateChange(e, formState, setFormState, setSelectError, setSubmitBlocked) {
  setSelectError(false);
  const { name, value } = e.target;
  if (name === 'endDate' && formState.startDate > value) {
    setSelectError('czas nie leci wstecz');
    setFormState({ ...formState, [name]: '' });
  } else {
    setFormState({ ...formState, [name]: value });
    setSubmitBlocked(false);
  }
}
export function handelStartDateChange(e, formState, setFormState, setSelectError, setEndDateBlocked) {
  setSelectError(false);
  const currentDate = new Date();
  const { name, value } = e.target;
  if (name === 'startDate' && new Date(value) > currentDate) {
    setSelectError('przyslosc dopiero nadejdzie');
    setFormState({ startDate: '', endDate: '' });
    setEndDateBlocked(true);
  } else if (checkEndDate(value, formState)) {
    setFormState({ ...formState, [name]: value });
    setEndDateBlocked(false);
  } else {
    setSelectError('nie mozesz szukac od wieksze od pozniej do wczesniej');
  }
}
const checkEndDate = (value, formState) => {
  if (value && formState.endDate && value > formState.endDate) {
    return false;
  } else {
    return true;
  }
};
