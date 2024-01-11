import css from './css/app.module.css';

import FirstPage from './Pages/First-page/FirstPage';

//===========================SELF-DEVELOPMENT===================================
import SelfDevelopment from './Pages/SelfDevelopment/SelfDevelopment';
import CreateSelfdevelopmentPost from './Pages/CreateSelfDevelopmentPost/CreateSelfdevelopmentPost';
import SelfDevelopmentPost from './Pages/SelfDevelopmentPost/SelfDevelopmentPost';

//===========================PHILOSOPHY==================================
import Philosophy from './Pages/Philosophy/Philosophy';
import CreatePhilosophyPost from './Pages/CreatePhisophyPost/CreatePhisophyPost';
import PhilosophyPost from './Pages/PhilosophyPost/PhilosophyPost';


//===========================PSIHOLOGY==================================
import Psychology from './Pages/Psychology/Psychology';
import CreatePsychologyPost from './Pages/CreatePsychologyPost/CreatePsychologyPost';
import PsychologyPost from './Pages/PsychologyPost/PsychologyPost';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className={css.app}>
      <Router>
        <Routes>
          <Route exact path='/' element={<FirstPage/>} />

          <Route path='/self-development' element={<SelfDevelopment/>} />
          <Route path='/createselfdevelopmentpost' element={<CreateSelfdevelopmentPost />} />
          <Route path='/self-development/:id' element={<SelfDevelopmentPost/>} />
          
          <Route path='/psychology' element={<Psychology/>} />
          <Route path='/CreatePsychologyPost' element={<CreatePsychologyPost />} />
          <Route path='/psychology/:id' element={<PsychologyPost/>} />

          <Route path='/philosophy' element={<Philosophy/>} />
          <Route path='/CreatePhilosophyPost' element={<CreatePhilosophyPost />} />
          <Route path='/philosophy/:id' element={<PhilosophyPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
