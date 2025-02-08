import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import { ModeProvider } from './context/ModeContext';
import {workData} from './data'
import './App.css'

const DefaultPage = ({ setList }) => {
  useEffect(() => {
    setList([]);
  }, []);
  return <p className="default"> No Page Found.☕Take a break.🧋</p>;
};

function App() {
  const [list, setList] = useState(workData);
  
  return (
    <>
      <ModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<DefaultPage setList={setList} /> } />
          <Route path='/' element={<HomePage list={list} />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </ModeProvider>
    </>
  );
}
export default App
