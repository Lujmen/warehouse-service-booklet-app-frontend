export const handleChange = (e, formData, setFormData) => {
  // You can still use your original handleInputChange logic if needed
  console.log(e.target.value);
  console.log(e.target.type);
  console.log(e.target.id);
  if (e.target.id === 'status' && e.target.checked === true) {
    setFormData({ ...formData, [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value, issues: '' });
    console.log(formData);
  } else {
    setFormData({ ...formData, [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }
};
