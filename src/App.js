import './App.css';
import { Outlet } from 'react-router-dom';
import { useAuth } from './context/authProvider';
import { NavBar } from './components/navBar/navBar';
import { useState } from 'react';
import modelService from './service refactor/modelService';
import userService from './service refactor/userService';
import chamferingService from './service refactor/chemferingService';

function App() {
  const { isLoading, userDetails } = useAuth();
  const [check, setCheckd] = useState();

  if (isLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  } else {
    return (
      <div className="App fs-500">
        <NavBar />
        {userDetails?.username && <p className="user-info">Uzytkownik: {userDetails.username}</p>}
        <div className="container">
          <Outlet />
        </div>
        <div>
          <button
            className="btn-primary"
            onClick={async () => {
              const fetchedData = await chamferingService.calcTimeByDataRande({
                key: 'time',
                page: '1',
                endDate: '2023-12-23',
                startDate: '2023-12-01',
              });
              setCheckd(fetchedData);
            }}
          >
            Check
          </button>
          <button onClick={() => console.log(check)}>is button checked</button>
        </div>
      </div>
    );
  }
}

export default App;
