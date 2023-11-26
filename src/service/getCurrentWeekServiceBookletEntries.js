import React from 'react';

const getCurrentWeekServiceBookletEntries = async (data) => {
  console.log('getCurrentWeekServiceBookletEntries');
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/getAllEntriesFromCurrentWeek', {
    method: 'post',
    credintials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (result.ok) {
    const data = await result.json();
    return await data;
  } else {
    throw new Error(result);
  }
};

export default getCurrentWeekServiceBookletEntries;
