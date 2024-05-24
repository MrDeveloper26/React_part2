"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()


const Context = ({children}) => {
    const username = "shyam Wasankar"
  return createContext(
    <div>
        <MyContext.Provider value={username}>
            {children}
        </MyContext.Provider>
    </div>
  )
}
createContext``
export default Context