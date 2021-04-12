import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import Home from './components/Home'
import Footer from './components/Footer'
import SingleCharacter from './components/SingleCharacter';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="main">
          <Switch>
            <Route path="/character/:id">
              <SingleCharacter />
            </Route>
            <Route path="/character/">
              <CharacterList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;