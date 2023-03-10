import { useContext, useEffect } from 'react'
import { NotifContext } from '../context/NotifContext';

const Notifications = () => {
    const {notif, setNotif} = useContext(NotifContext)


    useEffect(() => {
        const timer = setTimeout(()=> {
            setNotif("")
        }, 5000)
        return () => {
            clearTimeout(timer)
        };
    }, [notif, setNotif]);


    if (notif !== "") {
  return (
    <div className="notification-banner">
      <span className="notification">{notif}</span>
      <button className='notif-btn'onClick={() => setNotif("")}>x</button>
    </div>
  )
    }
}

export default Notifications