import './App.css';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;


// *** App Component ***
  // Create state items to hold data coming from the third-party API and the user input
    // dogBreeds
    // userInput

// *** Gallery Component **
  // click on landing page button to mount component and call the local method (getDogs) to get a list of random dogs to start
    // getDogs makes third-party API call with userInput
      // when successful, update state (dogBreeds) with new data
      // if unsuccessful, display error message

  // *** Form Component ***
    // local method (handleChange) to handle onChange event to update state (userInput) with user input
    // local method (handleSubmit) to trigger rerender of list based on updated state (call getDogs)

  // *** Breed Component ***
    // get data (dogBreeds) passed in as props
    // use .map() to render out data

// Render application
  // Header Component
  // Gallery Component
    // Form Component
    // Breed Component
  // Footer Component
