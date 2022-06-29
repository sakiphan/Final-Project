import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Orders from './Orders';
import Home from './Home';
import PageNotFound from './PageNotFound';


const App = () => {
  return (
    <div align= "center">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
