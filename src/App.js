// import './App.css';
// import Signup from './Signup'
import Landing from './Landing';
// import Login from './Login';
import Register from "./Register"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Landing /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register/:eventName' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
