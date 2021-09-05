import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Library from './Components/Library';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path="/library">
            <Library/>
          </Route>
          <Route path="/contacts">
            <h1>I am contacts</h1>
          </Route>
          <Route path="/">
            <h1>I am home</h1>
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
