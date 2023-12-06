export const displayErrors = (errors) => {
  const errorElements = [];

  for (const obj of errors) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        errorElements.push(
          <div className="error" key={`${key}-${value}`}>
            {key}: {value}
          </div>
        );
      }
    }
  }

  return errorElements;
};
