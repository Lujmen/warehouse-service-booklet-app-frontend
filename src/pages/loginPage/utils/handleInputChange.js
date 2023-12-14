const handleInputChange = (formData, e, setFormData) => {
  // You can still use your original handleInputChange logic if needed
  console.log(e.target.value);
  if (e.target.value.includes('\u00A0')) {
    // Handle the hard space as needed
    console.log('Hard space detected!');
  }
  setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });
};

export { handleInputChange };
