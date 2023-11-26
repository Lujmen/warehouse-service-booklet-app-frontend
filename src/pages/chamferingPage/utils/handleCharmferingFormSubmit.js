import addCharmferingEntry from '../../serviceBookletPage/utils/addCharmFeringEntry';

const handleCharmferingFormSubmit = async (data, setError, setSucces, e, setFormState) => {
  e.preventDefault();
  setError(false);
  setSucces(false);
  try {
    const result = await addCharmferingEntry(data);
    setSucces(true);
    setFormState({ differenceFromPingink: '', diffrentFromQC: '', timeOfChamfering: '' });
    return result;
  } catch (error) {
    setError(await error.message);
    throw error;
  }
};
export default handleCharmferingFormSubmit;
