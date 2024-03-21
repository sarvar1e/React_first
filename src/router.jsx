import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutComponent from './about';
import Navbar from './navbar';
import Homepage from './home';
import KnowYourRisks from './KnowYourRisks';
import ForWork from './forwork';
import ShopComponent from './shop';
import JournalComponent from './journal';


const RouterComponent = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutComponent/>} />
        <Route path="/KnowYourRisks" element={<KnowYourRisks/>} />
        <Route path="/forwork" element={<ForWork/>} />
        <Route path="/journal" element={<JournalComponent/>} />
        <Route path="/shop" element={<ShopComponent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent;