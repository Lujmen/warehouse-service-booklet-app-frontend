import convertToBase64 from '../../../utils/convertToBase64';

export const handleChangeImage = async (e, setFile) => {
  try {
    const file = await e.target.files[0];
    const base64 = await convertToBase64(file);
    setFile(base64);
  } catch (error) {
    console.log(error);
  }
};
