import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shorten from './components/Shorten';
import Section from './components/Section';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Shorten />
      <Section />
      <About />
      <Footer />
    </div>
  );
}

export default App;
