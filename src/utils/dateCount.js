import { DEADLINE } from "./consts"

export default function () {
    const timeRemaining = (Date.parse(DEADLINE)-Date.now())/1000
    const days = parseInt(timeRemaining/60/60/24)
    const hours = parseInt((timeRemaining - days*60*60*24)/60/60)
    const minutes = parseInt((timeRemaining - days*60*60*24 - hours*60*60)/60)
    const seconds = parseInt(timeRemaining - days*60*60*24 - hours*60*60 - minutes*60)
    return {days, hours, minutes, seconds}
}