import postInfo from '../../../service/postInfo';

export const handleSubmit = async (e, file, info, queryClient) => {
  e.preventDefault();
  const dataObj = { file, info };
  const result = await postInfo(dataObj);
  queryClient.invalidateQueries({ queryKey: ['infos'] });
  console.log(result);
};
