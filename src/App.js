import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Library from './Components/Library';
import Faq from './Components/Faq';
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
// import AboutUs from "./Components/Aboutus"
import ContactUs from "./Components/Contactus"
import SoftwaresOfBranches from './Components/SoftwaresOfBranches';
import ProgramElective from './QuestionPaperComponents/ProgramElective';
import QuestionPapersPage from './QuestionPaperComponents/QuestionPapersPage';
// >>>>>>> main
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="app__util">
          <Switch>
            {/* <Route exact path="/aboutUs">
              <AboutUs />
  </Route> */}
            <Route exact path="/contactUs">
              <ContactUs />
            </Route>
            <Route exact path="/library">
              <Library />
            </Route>
            <Route exact path="/feeform">
              <Feeform />
            </Route>
            <Route exact path="/Timetable">
              <Timetable />
            </Route>
            <Route exact path="/Faqs">
              <Faq />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route path="/softwares/:id">
              {() => (
                <SoftwaresOfBranches branch={window.location.pathname} />
              )
              }
            </Route>
            <Route exact path="/softwares">
              <Softwares />
            </Route>
            <Route path="/questionPapers/:id/departmentElective/:id">
              {() => (
                <QuestionPapersPage head={window.location.pathname} />
              )
              }
            </Route>
            <Route path="/questionPapers/:id/departmentElective">
              {() => (
                <ProgramElective branch={window.location.pathname} />
              )
              }
            </Route>
            <Route exact path="/questionPapers">
              <QuestionPapers />
            </Route>
            <Route exact path="/">
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
