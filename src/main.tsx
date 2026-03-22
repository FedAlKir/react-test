import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';

const root = document.getElementById('root');
if (!root) throw new Error('Root element #root not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
