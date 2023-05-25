import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
              <Route path="/home" exact element={<Home />} />
              <Route path="/main" exact element={<Main />} />
              <Route path="/" exact element={<Login/>} />
              <Route path="*" element={<h1>404 Not Found</h1>} />



          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
