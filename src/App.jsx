import css from './css/app.module.css';
import FirstPage from './Pages/First-page/FirstPage';
import SelfDevelopment from './Pages/SelfDevelopment/SelfDevelopment';
import Philosophy from './Pages/Philosophy/Philosophy';
import Psychology from './Pages/Psychology/Psychology';
import SelfDevelopmentPost from './Pages/SelfDevelopmentPost/SelfDevelopmentPost';
import CreateSelfdevelopmentPost from './Pages/CreateSelfDevelopmentPost/CreateSelfdevelopmentPost';
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
          <Route path='/philosophy' element={<Philosophy/>} />
          <Route path='/psychology' element={<Psychology/>} />
          <Route path='/self-development/:id' element={<SelfDevelopmentPost/>} />
          <Route path='/createselfdevelopmentpost' element={<CreateSelfdevelopmentPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
