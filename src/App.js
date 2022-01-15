import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Contato from "./Pages/Contato";
import Empresa from "./Pages/Empresa";
import Home from "./Pages/Home";

function App() {
  return (

    <Router>

      <Navbar/>

      <Routes>

        <Route exact path="/" element={<Home/>}></Route>

        <Route path="/empresa" element={<Empresa/>}></Route>

        <Route path="/contato" element={<Contato/>}></Route>

      </Routes>

    </Router>
  );
}

export default App
