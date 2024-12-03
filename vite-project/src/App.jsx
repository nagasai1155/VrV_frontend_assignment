import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserManagement from './pages/UserManagement/UserManagement';
import RoleManagement from './pages/RoleManagement/RoleManagement';
import AnimatedWelcome from './pages/AnimatedWelcome/AnimatedWelcome.jsx';
import Navbar  from './components/Navbar/Navbar.jsx';
function App() {
    return (
      
        <Router>
             <Navbar />
            {/* <nav>
                <Link to="/users">Users</Link>
                <Link to="/roles">Roles</Link>
            </nav> */}
            <Routes>
            <Route path="/" element={<AnimatedWelcome />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/roles" element={<RoleManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
