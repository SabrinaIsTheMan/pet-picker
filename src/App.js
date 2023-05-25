import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Selection from './components/Selection.js'
import DogGallery from './components/DogGallery.js';
import CatGallery from './components/CatGallery.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/dog" element={<DogGallery />} />
        <Route path="/cat" element={<CatGallery />} />

        <Route path="*" component={<Selection />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

