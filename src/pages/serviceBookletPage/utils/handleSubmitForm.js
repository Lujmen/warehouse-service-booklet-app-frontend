import serviceBookletEntryService from '../../../service/serviceBookletEntryService';

export const handeSubmitForm = async (data, additionalData, setIsSubmiting) => {
  setIsSubmiting(true);
  const reqObj = { ...data, ...additionalData };
  console.log(reqObj);
  try {
    const result = await serviceBookletEntryService.addEntry(reqObj);
    console.log(result);
    if (result && !(result instanceof Error)) {
      setIsSubmiting(false);
      return await result;
    }
  } catch (error) {
    setIsSubmiting(false);
    throw error;
  }
};
