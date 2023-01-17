import 'bootstrap/dist/css/bootstrap.min.css';

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
