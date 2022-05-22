import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=false">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles">
          <Route path=":username" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
