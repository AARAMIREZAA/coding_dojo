import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:product_id" element={<ProductDetail />} />
        <Route path="/:product_id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
