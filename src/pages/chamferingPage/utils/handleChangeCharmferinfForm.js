const handleChangeCharmferingForm = (e, formState, setFormState) => {
  console.log(e.target.value);
  console.log(e.target.id);
  setFormState({ ...formState, [e.target.id]: e.target.value });
};
export default handleChangeCharmferingForm;
