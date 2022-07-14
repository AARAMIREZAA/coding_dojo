import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <fiedlset>
        <legend>App.js</legend>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </fiedlset>
    </div>
  );
}

export default App;
