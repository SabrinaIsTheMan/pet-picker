import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js'
import HomeButton from './components/HomeButton.js';
import DogGallery from './components/DogGallery.js';
import CatGallery from './components/CatGallery.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <HomeButton /> */}
      <DogGallery />
      <Footer />
    </div>
  );
}

export default App;

