import './app.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <AnimatePresence>
          {/* Will render on every screen view */}
          <Header motion={motion} />
          <Switch>
            <Route path="/checkout">
              <Checkout motion={motion} />
            </Route>
            {/* Default Route stays at the bottom */}
            <Route path="/">
              <Home motion={motion} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
