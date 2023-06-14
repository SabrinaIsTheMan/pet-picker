import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Selection from './components/Selection'
import DogGallery from './components/DogGallery';
import CatGallery from './components/CatGallery';
import Footer from './components/Footer';

import ErrorPage from './components/ErrorPage';

function App() {

  const [titleValue, setTitleValue] = useState("Pet");

  const handleTitleChange = (event) => {
      console.log(event.target.value)
      setTitleValue(event.target.value);
    }

  return (
    <div className="App">
      <Header title={titleValue}/>

      <Routes>
        <Route path="" element={<Selection handleTitleChange={handleTitleChange} />} />
        <Route path="/dog" element={<DogGallery handleTitleChange={handleTitleChange} />} />
        <Route path="/cat" element={<CatGallery handleTitleChange={handleTitleChange} />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

