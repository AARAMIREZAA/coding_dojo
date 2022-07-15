import './App.css';
import LukeForm from './components/LukeForm';
import People from "./pages/People"
import Planets from "./pages/Planets"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <LukeForm />
      <Routes>
        <Route path="/people/:people_id" element={<People />} />
        <Route path="/planets/:planets_id" element={<Planets />} />
      </Routes>
    </fieldset>
  );
}

export default App;
