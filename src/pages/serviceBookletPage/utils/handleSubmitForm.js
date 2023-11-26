import serviceBookletEntryService from '../../../service/serviceBookletEntryService';

export const handeSubmitForm = async (data, additionalData, queryClient) => {
  const reqObj = { ...data, ...additionalData };
  console.log(reqObj);
  try {
    const result = await serviceBookletEntryService.addEntry(reqObj);
    console.log(result);
    if (result && !result instanceof Error) {
      return await result;
    }
  } catch (error) {
    throw error;
  }
};
