import './App.css';
import Album from './Components/Album';
import Footer from './Components/Footer';
import ButtonAppBar from './Components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
      </header>
      <main>
        <Album />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
