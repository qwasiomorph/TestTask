import React, { useEffect, useRef } from 'react'
import DateTimeout from '../components/DateTimeout'
import EventButton from '../components/EventButton'
import style from './FrontPage.module.css'


const FrontPage = () => {
  const logo = useRef(null)
  const title = useRef(null)
  const left = useRef(null)
  const right = useRef(null)
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        entry.target.classList.add(style.shown)
      }
    })
  })
  useEffect(()=>{
    observer.observe(logo.current)
    observer.observe(title.current)
    observer.observe(left.current)
    observer.observe(right.current)
  }, [])
  return (
    <div className={style.frontPage}>
      <div className={style.cornerContainer}>
        <div ref={left} className={[style.left, style.hiddenXm].join(' ')}></div>
        <div ref={right} className={[style.right, style.hiddenXp].join(' ')}></div>
      </div>
      <div className={style.frontContainer}>
        <a href="/"><div ref={logo} className={[style.Logo, style.hiddenY].join(' ')}></div></a>
        <div ref={title} className={[style.caption, style.hiddenY].join(' ')}>
          <h1 className={style.h1text}>Under Construction</h1>
          <p style={{alignSelf: 'center'}}>We're making lots of improvements and will be back soon</p>
        </div> 
        <DateTimeout />
        Check our event page when you wait:
        <br />
        <EventButton />
      </div>
    </div>
    
  )
}

export default FrontPage
