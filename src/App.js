import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Selection from './components/Selection'
import DogGallery from './components/DogGallery';
import CatGallery from './components/CatGallery';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/dog" element={<DogGallery />} />
        <Route path="/cat" element={<CatGallery />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

