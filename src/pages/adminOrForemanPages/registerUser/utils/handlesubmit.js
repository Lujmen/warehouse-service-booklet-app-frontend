import { registerUser } from '../../../../service/registerUser';
export const handlesubmit = async (e, formData, setError, setIsSubmiting) => {
  setIsSubmiting(true);
  e.preventDefault();
  const data = await registerUser(formData);
  console.log(`data`);
  setError([]);
  try {
    await registerUser(formData);
  } catch (error) {
    console.log('errro from handle');
    setError(error);
  } finally {
    setIsSubmiting(false);
  }
};
