import './App.css'
import FrontPage from './pages/FrontPage'
import AllEvents from './pages/AllEvents'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import { useState } from 'react'
import {Validate} from './utils/formHandling'

function App() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  const [message, setMessage] = useState(false)
  const [popUpShow, togglePopUp] = useState(false)
  const handleSubmit = (Email) => {
    setMessage(Validate(Email))
    togglePopUp(true)
  }
  const handlePopUpClose=()=>{
    togglePopUp(false)
  }
  return (
    <div style={popUpShow?{background: 'rgba(22, 44, 78, 0.6)'}:{}}>
      {popUpShow?
        <PopUp close={handlePopUpClose} message={message}/>
      :<></>}
      <FrontPage inputDisable={popUpShow}/>
      <Footer scroll={handleScroll} submit={handleSubmit} inputDisable={popUpShow}/>
      <AllEvents />
    </div>
  )
}

export default App
