
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const loggedIn = localStorage.getItem("id");
  // let logged = false;
  // if ((JSON.stringify(localStorage.getItem("name")) !== "") && (JSON.stringify(localStorage.getItem("id")) !== null)) {
  //    logged  = true;
  // }

  // console.log(JSON.stringify(localStorage.getItem("id")))

  return (
    <div className="App">
      {
      loggedIn ?
      <Home /> :
      <Login />
      }
    </div>
  );
}

export default App;
