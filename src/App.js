import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Library from './Components/Library';
// <<<<<<< main
import Feeform from './Components/Feeform';
import Showcase from './Components/Showcase';
import Timetable from './Components/Timetable'
import Contacts from './Components/Contacts';

// =======
import Footer from './Components/Footer';
// >>>>>>> main
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Showcase/>
        <div className="app__util">
        <Switch>
          <Route path="/library">
            <Library/>
          </Route>
          <Route path="/feeform">
            <Feeform/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/softwares">
            <h1>Softwares</h1>
          </Route>
          <Route path="/Timetable">
            <Timetable/>
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
