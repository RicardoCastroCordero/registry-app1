//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./routes/Home";
import Registry from "./routes/Registry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/registry" element={<Registry />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
