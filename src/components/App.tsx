import 'bootstrap/dist/css/bootstrap.min.css';

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './navbar/Navbar';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
