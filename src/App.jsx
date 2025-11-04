
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { Navbar } from './componentes/NavBar/Navbar'




function App() {


  return (
    <>
     <Navbar/>
     <ItemListContainer msg= "Este es un mensaje desde el componente padre">

     </ItemListContainer>
    </>
  )
}

export default App
