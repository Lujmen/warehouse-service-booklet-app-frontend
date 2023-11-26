const handleSubmit = async (e, formData, handleLogin, setError, navigate) => {
  e.preventDefault();
  try {
    await handleLogin(formData).then(() => {
      navigate('/serviceBooklet');
      navigate('/');
    });
  } catch (error) {
    console.log(error);
    setError({ message: error.message });
  }
};

export { handleSubmit };
