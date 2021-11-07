import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Library from './Components/Library';
// <<<<<<< main
import Feeform from './Components/Feeform';
import Showcase from './Components/Showcase';
import Timetable from './Components/Timetable';
import Home from './Components/Home';
import Contacts from './Components/Contacts'
import QuestionPapers from './Components/QuestionPapers';
import Softwares from './Components/Softwares';
// =======
import Footer from './Components/Footer';
import SoftwaresOfBranches from './Components/SoftwaresOfBranches';
import ProgramElective from './QuestionPaperComponents/ProgramElective';
// >>>>>>> main
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="app__util">
          <Switch>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/feeform">
              <Feeform />
            </Route>
            <Route path="/Timetable">
              <Timetable />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/softwares/:id">
              {() => (
                <SoftwaresOfBranches branch={window.location.pathname} />
              )
              }
            </Route>
            <Route path="/softwares">
              <Softwares />
            </Route>
            {/* <Route path="/questionPapers/:id">
            {()=>(
            <QuestionPapersOfBranches branch={window.location.pathname}/>
            )
            }
          </Route> */}
            <Route path="/questionPapers/:id/openElective">
              {() => (
                <ProgramElective branch={window.location.pathname} />
              )
              }
            </Route>
            <Route path="/questionPapers">
              <QuestionPapers />
            </Route>
            <Route path="/">
              <Showcase />
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
