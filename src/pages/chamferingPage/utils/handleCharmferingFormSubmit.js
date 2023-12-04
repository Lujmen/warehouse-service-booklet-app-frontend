import addCharmferingEntry from '../../serviceBookletPage/utils/addCharmFeringEntry';

const handleCharmferingFormSubmit = async (data, setError, setIsSubmiting, e, setFormState) => {
  setIsSubmiting(true);
  e.preventDefault();
  setError(false);
  try {
    const result = await addCharmferingEntry(data);
    setFormState({ differenceFromPingink: '', diffrentFromQC: '', timeOfChamfering: '' });
    setIsSubmiting(false);
    return result;
  } catch (error) {
    setIsSubmiting(false);
    setError(await error.message);
    throw error;
  }
};
export default handleCharmferingFormSubmit;
