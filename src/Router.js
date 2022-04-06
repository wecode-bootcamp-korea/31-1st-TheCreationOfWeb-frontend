import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import TeamMember from './pages/TeamMember/TeamMember';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/join" element={<Join />} />
        <Route path="/member/teamMember" element={<TeamMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
