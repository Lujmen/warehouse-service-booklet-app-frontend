import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getCurrentColor from '../../../service/getCurrentColor';
import { useTranslation } from 'react-i18next';

const CurrentColorComponent = () => {
  const { data: color, isLoading, isError, error } = useQuery({ queryKey: ['color'], queryFn: getCurrentColor, retry: false });
  const { t } = useTranslation();
  return (
    <div className="current-color-container">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {color && (
        <div className="curent-color">
          <p>Bierzący kolor: {t(color.color)}</p>
          <div className="color-square" id={color.color}></div>
        </div>
      )}
    </div>
  );
};

export default CurrentColorComponent;
