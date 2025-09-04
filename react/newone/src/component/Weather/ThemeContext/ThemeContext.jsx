import React, { Children, createContext } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext()



const ThemeProvider = ({children}) => {
    const [theme,settheme]=useState("light")
    const changetheme = ()=>(
        settheme((prev)=>(prev=="light"?"dark":"light"))
    )


  return (
    <div>
      <ThemeContext.Provider value={{theme,changetheme}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider


