import './app.css';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
