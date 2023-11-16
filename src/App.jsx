/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import './App.css'
import Inicio from './components/nasa/Inicio'
import Nasa from'./components/nasa/Nasa'
import Footer from './components/nasa/Footer'

function App() {
  return (
    <>
    <div className="app"> 
      { <Inicio />}
      { <Nasa />}
      { <Footer />}
    </div>
    </>
    
    )
  }
export default App
