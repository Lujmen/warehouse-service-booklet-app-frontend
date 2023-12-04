import React from 'react';
import CharmferingForm from './components/charmferingForm';
import CharmferingList from './components/charmferingList';
import './chamferinPage.css';

const ChamferingPage = () => {
  return (
    <div className="chamfering-page-container bg-primary-100">
      <CharmferingForm />
      <CharmferingList />
    </div>
  );
};

export default ChamferingPage;
