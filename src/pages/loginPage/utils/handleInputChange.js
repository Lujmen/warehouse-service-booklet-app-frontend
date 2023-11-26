const handleInputChange = (formData, e, setFormData) => {
  // You can still use your original handleInputChange logic if needed
  console.log(e.target.value);
  setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });
};

export { handleInputChange };
