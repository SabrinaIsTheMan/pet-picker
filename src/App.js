import './App.css';
import Header from './components/Home.js';
import DogGallery from './components/DogGallery.js';
import CatGallery from './components/CatGallery.js';
import Footer from './components/Footer.js';
// import { useState } from 'react';

function App() {

  // const [pet, setPet] = useState("Pet");

  // header dynamics
    // pet
    // click on Dog, becomes dog
    // click on cat, becomes cat

  return (
    <div className="App">
      <Header />
      {/* <h1>Pet Breed Recommendation</h1>
      <DogGallery /> */}
      <Footer />
    </div>
  );
}

export default App;

