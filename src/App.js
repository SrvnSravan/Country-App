import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomeLayout from './pages/HomeLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from './redux/countriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <HomeLayout />
    </div>
  );
}

export default App;
