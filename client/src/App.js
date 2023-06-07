import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Lab from './pages/Lab';
import { useAuthContext } from './hooks/useAuthContext';
import Equipment from './pages/Equipment';
import LabView from './pages/LabView';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';

function App() {
  const {user}=useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/home" exact element={user?<Home />:<Navigate to='/login'/>} />
            <Route path="/main" exact element={user?<Main />:<Navigate to='/login'/>} />
            <Route path="/equipment" exact element={user?<Equipment />:<Navigate to='/login'/>} />
            <Route path="/login" exact element={user?<Home/>:<Login/>} />
            <Route path="/register" exact element={user?<Home/>:<Register />} />
            <Route path="/lab" exact element={user?<Lab/>:<Login />} />
            <Route path="/lab/:id" exact element={user?<LabView/>:<Login />} />
            <Route path="/alerts" exact element={user?<Alerts/>:<Login />} />
            <Route path="/reports" exact element={user?<Reports/>:<Login />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />



          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
