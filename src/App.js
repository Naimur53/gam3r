
import './App.css';
// import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import MainNavbar from './Components/MainNavbar/MainNavbar';
function App() {

  return (
    <div className="App">
      <MainNavbar></MainNavbar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
