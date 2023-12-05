import convertToBase64 from '../../../utils/convertToBase64';

export const handleChangeImage = async (e, setFile, setError) => {
  setError('');
  try {
    const file = await e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Wybierz poprawny format zdjecia');
        return;
      }
      const base64 = await convertToBase64(file);
      setFile(base64);
    }
  } catch (error) {
    console.log(error);
  }
};
