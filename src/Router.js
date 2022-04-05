import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Profile from './pages/Profile/Profile';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/join" element={<Join />} />
        <Route path="/member/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
