import React from 'react'
import style from './EventButton.module.css'


const EventButton = ({inputDisable}) => {
  return (
    <a href='https://www.google.com/' target='_blank'>
        <button disabled={inputDisable?'disabled':''} className={style.Eventbutton}>
          <div>Go to the event</div>
          <div className={style.arrow}></div>
        </button>
    </a>
    
  )
}

export default EventButton
