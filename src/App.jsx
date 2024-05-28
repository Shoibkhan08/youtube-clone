import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Sidebar />} >
          <Route path="/" element/>
          <Route path='/video/:id' element/>
          <Route path='/search/:searchTerm' element/>
        </Route>
      </Routes>
    </>
  )
}

export default App
