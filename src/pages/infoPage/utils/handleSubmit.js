import postInfo from '../../../service/postInfo';

export const handleSubmit = async (e, file, info, queryClient, setIsSubmiting, setError) => {
  setError(false);
  setIsSubmiting(true);
  e.preventDefault();
  try {
    const dataObj = { file, info };
    await postInfo(dataObj);
    await queryClient.invalidateQueries({ queryKey: ['infos'] });
    setIsSubmiting(false);
  } catch (error) {
    setError(error);
    setIsSubmiting(false);
  }
};
