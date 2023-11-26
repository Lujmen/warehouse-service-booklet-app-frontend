import getForkliftModels from '../../../service/forkliftModelService';

export const forkliModelOptions = async (setError) => {
  try {
    const modelList = await getForkliftModels.getForkliftModels();
    console.log('POPELINA NA MAXA');
    return await modelList;
  } catch (error) {
    setError(error);
  }
};
