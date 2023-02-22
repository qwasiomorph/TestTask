import React from 'react'
import style from './PopUp.module.css'

const PopUp = ({close, message}) => {
  return (
    <div className={style.popUp}>
          <button className={style.close1} onClick={()=>close()}><div className={style.cross}></div></button>
          <h4 className={style.status}>{message?'Success!':'Failure'}</h4>
          <div className={style.message}>{message?'You have successfully subscribed to the email newsletter':
          "Please, check the Email you've entered"
          }</div>
          <button className={style.close2} onClick={()=>close()}>Close</button>
    </div>
  )
}

export default PopUp
