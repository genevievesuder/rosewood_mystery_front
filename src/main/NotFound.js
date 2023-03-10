import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="not-found">
      <div className="nfb">
      <h1 className="nfh">Looks like you took a wrong turn.. better retrace your steps.</h1>
      <img onClick={() => navigate('/home')} className="steps" src={process.env.PUBLIC_URL+"/steps.png"} alt="404 not found"/>
      </div>
    </div>
  )
}

export default NotFound