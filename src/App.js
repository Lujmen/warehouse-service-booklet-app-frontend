import './App.css';
import { Outlet } from 'react-router-dom';
import { useAuth } from './context/authProvider';
import { NavBar } from './components/navBar/navBar';

function App() {
  const { isLoading, userDetails } = useAuth();

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
      </div>
    );
  }
}

export default App;
