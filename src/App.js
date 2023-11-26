import './App.css';
import { Outlet } from 'react-router-dom';
import { useAuth } from './context/authProvider';
import NavBarIfUserPostedOnGantry from './components/navBar/navBarIfUserPostedOnGantryComponent';
import NavBarIfUserNoLogin from './components/navBar/navBarIfUserNoLogin';
import NavBarIfUserPostedOnForklift from './components/navBar/navBarIfUserPostedOnForklift';
import NavBarIfForemanOrAdmin from './components/navBar/navBarIfForemanOrAdmin';

function App() {
  const { isLoading, userDetails, workplaceDetails } = useAuth();

  if (isLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        {(workplaceDetails.workplace === 'foreman' || workplaceDetails.workplace === 'admin') && <NavBarIfForemanOrAdmin />}
        {workplaceDetails.workplace === '' && <NavBarIfUserNoLogin />}
        {workplaceDetails.workplace === 'gantry' && <NavBarIfUserPostedOnGantry />}
        {workplaceDetails.workplace === 'forklift' && <NavBarIfUserPostedOnForklift />}
        <h1>{userDetails.username}</h1>
        <Outlet />
      </div>
    );
  }
}

export default App;
