import { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";


export const FlightContext = createContext()

function FlightContextProvider({ children }) {

    const [activeLink, setActiveLink] = useState("/")
    const switchTab = (tabLink) => { setActiveLink(tabLink) }
    const { toggle: isLogin, togglerHandler: loginHandler } = useToggle(false)

    const flightValue = {
        activeLink,
        switchTab,
        isLogin,
        loginHandler
    }



    return (
        <FlightContext.Provider value={flightValue}>
            {children}
        </FlightContext.Provider>
    )
}


export default FlightContextProvider