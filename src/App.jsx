
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer/itemDetailContainer";
import NotFound from "./notFound/NotFound";
import NavBar from "./componentes/NavBar/Navbar";


function App() {


  return (

      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<NotFound />} />

      </Routes>


  )
}

export default App
