import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import AllProducts from './pages/all products/All Products';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/products' element={<AllProducts/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
