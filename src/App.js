
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './Style.css';
import Navbar from './Navbar';
import MainBodyComponent from './MainBodyComponent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Navbar/>}></Route> */}
        <Route path="/" element={<MainBodyComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
