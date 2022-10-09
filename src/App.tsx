import { Route, Routes } from 'react-router-dom';
import './App.css';

import { GlobalStyles } from './globalStyles';
import LandingPage from './pages/LandingPage';
import Playground from './pages/Playground';




function App() {

  const knownPaths = [
    "/",
    "/playground"
  ];
  //relocate the user to landing page in any other case
  if (!knownPaths.includes(window.location.pathname)) window.location.replace("/");

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/playground" element={ <Playground />} / >
      </Routes>
    </div>
  );
}

export default App;
