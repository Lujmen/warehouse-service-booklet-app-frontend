import React from 'react';

export const handleDataFromLastAdded = async (data) => {
  const formattedData = [];

  const dataToFormat = await data;

  if (Array.isArray(dataToFormat)) {
    dataToFormat.forEach((element) => {
      if (element.hasOwnProperty('element')) {
        console.log('element');
        console.log(element.element);
        formattedData.push({ message: element.element.model + ' uzytkownik jest wpisany na suwnice', isPosted: true, id: element.element._id });
      } else if (element.hasOwnProperty('error')) {
        console.log('error');
        console.log(element.error);
        formattedData.push({ message: element.error.model + ' ' + element.error.message, isPosted: false });
      }
    });
    console.log(formattedData);
    return formattedData;
  } else {
    console.log('dlaczego ?');
    console.log(dataToFormat);
    console.log({ message: dataToFormat.model + ' uzytkownik jest wpisany na wozek' });
    return { message: dataToFormat.model + ' uzytkownik jest wpisany na wozek', isPosted: true, id: dataToFormat._id };
  }
};
