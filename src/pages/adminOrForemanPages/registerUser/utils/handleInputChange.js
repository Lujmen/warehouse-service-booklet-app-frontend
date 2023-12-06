const handleInputChange = (formData, e, setFormData) => {
  // You can still use your original handleInputChange logic if needed
  console.log(e.target.value);
  console.log(e.target.id);

  setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });
};

export { handleInputChange };
