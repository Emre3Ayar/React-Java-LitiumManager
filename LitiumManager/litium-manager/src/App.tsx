import './App.css';
import Home from './pages/home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/Home'
                    element={<Home />}
                />
                <Route
                    path='/'
                    element={<Navigate to='/Home' />}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
