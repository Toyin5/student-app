
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Test from './components/Scanner';

function App() {
  const loggedIn = localStorage.getItem("id");



  return (
    <div>
      <Routes>
        <Route path="/" element={
          loggedIn ?
            <Home /> :
            <Login />
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Login />} />
        <Route path='/scan' element={<Test />} />
      </Routes>
    </div>

  );
}

export default App;
