import chamferingService from '../../../service refactor/chemferingService';
import addCharmferingEntry from '../../serviceBookletPage/utils/addCharmFeringEntry';

const handleCharmferingFormSubmit = async (data, setError, setIsSubmiting, e, setFormState) => {
  setIsSubmiting(true);
  e.preventDefault();
  setError(false);
  try {
    const result = await chamferingService.addEntry(data);
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
