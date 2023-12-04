import { useTranslation as useI18nTranslation } from 'react-i18next';

const useTranslation = () => {
  // Ensure that i18n is initialized before using useI18nTranslation

  return useI18nTranslation();
};

export default useTranslation;
