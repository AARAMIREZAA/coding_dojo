import {Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar';
import PokeForm from './components/PokeForm';
import Pokemon from './pages/Pokemon';
// import Auth from './views/Auth';
// import Create from './views/Create';
// import Dashboard from './views/Dashboard';
// import Detail from './views/Detail';
// import Edit from './views/Edit';

function App() {
  return (
      <fieldset>
        <legend>App.js</legend>
        <PokeForm />
        <hr />
        <Routes>
          <Route path="pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>

      </fieldset>
  );
}

export default App;