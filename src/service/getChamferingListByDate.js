const getChamferingListByDate = async (date) => {
  console.log(date);
  console.log('*******************************************');
  const { startDate, endDate, page = 1 } = date;
  const response = await fetch(
    process.env.REACT_APP_BASE_API_URL + `chamfering/getByDateRange?startDate=${startDate}&endDate=${endDate}&page=${page}`,
    {
      method: 'GET',
      credentials: 'include',
    }
  );
  const data = response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data);
  }
};
export default getChamferingListByDate;
