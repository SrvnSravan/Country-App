import './App.css';
import LoginPage from './pages/LoginPage';
import HomeLayout from './pages/HomeLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from './redux/countriesSlice';
import SignupPage from './pages/SignupPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/home' element={<HomeLayout />} />
    </Routes>
  );
}

export default App;
