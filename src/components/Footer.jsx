import React, { useState } from 'react'
import style from './Footer.module.css'
const Footer = ({scroll, submit, inputDisable}) => {
  const [Email, setEmail] = useState('')
  const handleChange=(email)=>{
    setEmail(email)
  }
  return (
    <div className={style.container}>
      <input className={style.textfield} disabled={inputDisable?'disabled':''} onChange={e=>handleChange(e.target.value)} type="email" placeholder='Enter your Email and get notified'/>
      <button className={style.buttonF} disabled={inputDisable?'disabled':''} onClick={()=>submit(Email)}><div className={style.arrow}></div></button>
      <button className={[style.buttonF, style.OtherEvents].join(' ')} disabled={inputDisable?'disabled':''} onClick={()=>scroll()}>Other Events<div className={style.arrow}></div></button>
    </div>
  )
}

export default Footer
