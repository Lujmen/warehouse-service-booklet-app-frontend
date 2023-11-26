export const getChamferingTime = async (data) => {
  console.log(' getChamferingTime function');
  console.log(data);
  const { startDate, endDate } = data;
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + `chamfering/getTimeFromDateRange?startDate=${startDate}&endDate=${endDate}`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Content-Type': 'appication/json',
    },
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result);
  }
};
