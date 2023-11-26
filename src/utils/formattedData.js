const formattedDate = (originalDate) => {
  const dataToFormat = new Date(originalDate);
  const result = dataToFormat.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return result;
};
export default formattedDate;
