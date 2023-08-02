
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class="Roboto">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Hero}/>
          <Route path="/about" exact component={About}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
