import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
// import Direct from './pages/Direct/Direct';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/join" element={<Join />} />
        {/* <Route path="/member/direct" element={<Direct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
