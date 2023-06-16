import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/views/Home';
import MyPage from './pages/MyPage/views/MyPage';
import Board from './pages/Board/views/Board';
import Login from './pages/Login/views/Login';
import Register from './pages/Register/views/Register';
import Ask from './pages/Ask/views/Ask';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;