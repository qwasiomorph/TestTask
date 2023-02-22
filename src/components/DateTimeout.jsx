import React, { useState } from 'react'
import countDate from '../utils/dateCount'
import style from './DateTimeout.module.css'

const DateTimeout = () => {
    const [{days, hours, minutes, seconds}, setDate] = useState(countDate())
    setInterval(()=>setDate(countDate()), 1000)
    return (
        <div className={style.container}>
            <div className={style.date}>
                <div style={{width: 90, textAlign:'center'}}>{days}</div>:
                <div style={{width: 90, textAlign:'center'}}>{hours}</div>:
                <div style={{width: 90, textAlign:'center'}}>{minutes}</div>:
                <div style={{width: 90, textAlign:'center'}}>{seconds}</div>
            </div>
            <div className={style.title}>
                <div className={style.titleMember}>Days</div>
                <div className={style.titleMember}>Hours</div>
                <div className={style.titleMember}>Minutes</div>
                <div className={style.titleMember}>Seconds</div>
            </div>
        </div>      
    )
}

export default DateTimeout
