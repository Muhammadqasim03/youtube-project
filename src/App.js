import './App.css';


import Common from './components/Common/Common';
import Player from './components/Player'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
      <Route path="/" element={<Common/>}  />
      <Route path="player" element={<Player/>}/>   
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
