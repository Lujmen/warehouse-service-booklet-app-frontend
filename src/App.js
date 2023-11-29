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
      <div className="App">
        <NavBar />
        {userDetails?.username && <h1 className="user-info">Uzytkownik: {userDetails.username}</h1>}
        <Outlet />
      </div>
    );
  }
}

export default App;
