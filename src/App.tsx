import { Header } from './componentes/Header/Header'
import { Conocenos } from './paginas/Conocenos/Conocenos'
import { Home } from './paginas/Home/Home'
import { Somos } from './paginas/Somos/Somos'

function App() {
  return (
    <div className="bg-primary-100">
      <Header />
      <Home />
      <Somos />
      <Conocenos />
    </div>
  )
}

export default App
