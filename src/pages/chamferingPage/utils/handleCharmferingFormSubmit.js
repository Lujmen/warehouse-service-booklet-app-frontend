import chamferingService from '../../../service refactor/chemferingService';
import addCharmferingEntry from '../../serviceBookletPage/utils/addCharmFeringEntry';

const handleCharmferingFormSubmit = async (data, setError, setIsSubmiting, e, setFormState, setSuccesHandler) => {
  setIsSubmiting(true);
  e.preventDefault();
  setError(false);

  try {
    const result = await chamferingService.addEntry(data);
    setFormState({ differenceFromPingink: '', diffrentFromQC: '', timeOfChamfering: '' });
    setIsSubmiting(false);
    // for now i handle at try catch
    // for sure
    setSuccesHandler();
    return result;
  } catch (error) {
    setIsSubmiting(false);
    console.log(error);
    setError(await error.message);
    return error;
  }
};
export default handleCharmferingFormSubmit;
