import React from 'react';
import './infopage.css';
import AddIfnfoForm from './components/addIfnfoForm';
import InfoList from './components/infoList';

export const InfoPage = () => {
  return (
    <div className="bg-primary-100 info-page-container">
      <h1 className="fs-primary-heading">Informacje</h1>
      <AddIfnfoForm />
      <InfoList />
    </div>
  );
};
