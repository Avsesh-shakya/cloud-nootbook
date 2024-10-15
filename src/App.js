import './App.css';
import About from './component/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import NoteState from './context/notes/NoteState';
import Home from './component/Home';

function App() {
  return (
    < >
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Routes>

   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      
      
      </Routes>
    </BrowserRouter>
 

    </NoteState>

      
     
    </>
  );
}

export default App;
