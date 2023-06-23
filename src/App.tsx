import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'components/shared/routes';
import Login from './components/Pages/Auth/index';
import MainLayout from 'components/shared/components/layout/MainLayout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
        {isLoggedIn && (
          <Route path="/" element={<MainLayout />}>
            {routes}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
