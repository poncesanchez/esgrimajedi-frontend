import { Header } from './componentes/Header/Header'
import { Conocenos } from './paginas/Conocenos/Conocenos'
import { Home } from './paginas/Home/Home'
import { Multimedia } from './paginas/Multimedia/Multimedia'
import { Somos } from './paginas/Somos/Somos'
import { Unirse } from './paginas/Unirse/Unirse'

function App() {
  return (
    <div className="bg-primary-100">
      <Header />
      <Home />
      <Somos />
      <Conocenos />
      <Multimedia />
      <Unirse />
    </div>
  )
}

export default App
