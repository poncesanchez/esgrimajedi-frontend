import { Footer } from './componentes/Footer/Footer'
import { Header } from './componentes/Header/Header'
import { Conocenos } from './paginas/Conocenos/Conocenos'
import { ConocenosProvider } from './paginas/Conocenos/context/ConocenosProvider'
import { Home } from './paginas/Home/Home'
import { Multimedia } from './paginas/Multimedia/Multimedia'
import { Somos } from './paginas/Somos/Somos'
import { Unete } from './paginas/Unete/Unete'

function App() {
  return (
    <div className="bg-primary-100">
      <Header />
      <Home />
      <Somos />
      <ConocenosProvider>
        <Conocenos />
      </ConocenosProvider>
      <Multimedia />
      <Unete />
      <Footer />
    </div>
  )
}

export default App
