import { Loader,Servises,Navbar,Transaction,Footer,Welcom } from "./components"
import './index.css'
const App = () => {
  return (
    <div className="min-h-screen  ">
        <div className='gradient-bg-welcome text-white'>
              <Navbar/>
              <Welcom/>
        </div>
        <Servises/>
        <Transaction/>
        <Footer/>
    </div>
  )
}

export default App
