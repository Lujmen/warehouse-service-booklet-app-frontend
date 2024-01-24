import React from 'react';

export const handleDataFromLastAdded = async (data) => {
  const formattedData = [];

  const dataToFormat = await data;

  if (Array.isArray(dataToFormat)) {
    dataToFormat.forEach((element) => {
      if (element.hasOwnProperty('element')) {
        console.log(element.element);
        formattedData.push({ message: element.element.model + ' uzytkownik jest wpisany na suwnice', isPosted: true, id: element.element._id });
      } else if (element.hasOwnProperty('error')) {
        console.log(element.error);
        formattedData.push({ message: element.error.model + ' ' + element.error.message, isPosted: false });
      }
    });
    console.log(formattedData);
    return formattedData;
  } else {
    console.log('dlaczego ?');
    console.log(dataToFormat.message);
    console.log({ message: dataToFormat.message + ' uzytkownik jest wpisany na wozek' });
    if (typeof dataToFormat.model !== 'undefined') {
      console.log('wpisany jest');
      return { message: `uzytkownik jest wpisany na wozek ${dataToFormat.model}`, isPosted: true, id: dataToFormat._id };
    } else {
      console.log('jest nie wpisany');
      return { message: dataToFormat.message };
    }
  }
};
