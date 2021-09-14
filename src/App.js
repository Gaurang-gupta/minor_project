import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Library from './Components/Library';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <div className="app__util">
        <Switch>
          <Route path="/library">
            <Library/>
          </Route>
          <Route path="/contacts">
            <h1>I am contacts</h1>
          </Route>
          <Route path="/softwares">
            <h1>Softwares</h1>
          </Route>
          <Route path="/">
            <h1>I am home</h1>
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
