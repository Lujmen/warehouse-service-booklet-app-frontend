import { registerUser } from '../../../../service/registerUser';
export const handlesubmit = async (e, formData, setError, setIsSubmiting) => {
  setIsSubmiting(true);
  e.preventDefault();
  setError([]);
  try {
    await registerUser(formData);
  } catch (error) {
    setError(error);
  } finally {
    setIsSubmiting(false);
  }
};
