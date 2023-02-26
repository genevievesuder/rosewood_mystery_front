import { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


const ViewContext = createContext()

const ViewProvider = ({children}) => {
// const navigate = useNavigate()
  const [view, setView] = useState("main"); //Or null?


  return (
    <ViewContext.Provider value={{view, setView}}>
        {children}
    </ViewContext.Provider>
)
}

export {ViewContext, ViewProvider}