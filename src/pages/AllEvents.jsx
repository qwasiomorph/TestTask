import React, { useState } from 'react'
import { EVENTS } from '../utils/events'
import style from './AllEvents.module.css'

const AllEvents = () => {
  const [mouseOver, setMouseOver] = useState('01')
  const events = EVENTS
  return (
    <div className={style.container} id='allEvents'>
      <h3 className={style.title}>All Events</h3>
      <ul>
        {events.map((event)=> 
          <li onMouseOver={()=>setMouseOver(event.number)} key={event.number}>
            <div className={style.listItemWrapper} style={mouseOver===event.number?{background: '#162C4E'}:{
              backgroundImage: "url('../assets/party.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat'
            }}>
              
              <div style={mouseOver===event.number?{}:{background: 'linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%)'}}>
                <div className={style.textWrapper} style={mouseOver===event.number?{}
                :{background: 'rgba(18, 18, 18, 0.7)', backgroundBlendMode: 'darken'}}>
                  <div>
                    <h6>{event.title}</h6>
                  </div>
                  <p>{event.number}</p>
                </div>
              </div>
            </div>
            {mouseOver===event.number?
              <div className={style.extention} style={{backgroundImage: "url('../assets/party.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat'
              }}>
                <div className={style.expandedMenu}>
                  <h6>{event.title}</h6> 
                  <p>{event.date}</p>
                  <div style={{ backgroundImage: "url('../assets/Button3.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'left center',
                                backgroundRepeat: 'no-repeat',
                                width: '213px',
                                height: '62px'
                  }}><a style={{display: 'block',width:'inherit', height: 'inherit'}} href='https://www.google.com/' target='_blank'></a></div>
                </div>
              </div>
              :<></>}
          </li>
        )}
      </ul>
    </div>
  )
}

export default AllEvents
