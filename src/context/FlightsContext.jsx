import { createContext, useState } from "react";


export const FlightContext = createContext()

function FlightContextProvider({ children }) {

    const [activeLink, setActiveLink] = useState("/")
    const switchTab = (tabLink) => {
        setActiveLink(tabLink)
    }

    const flightValue = {
        activeLink,
        switchTab
    }



    return (
        <FlightContext.Provider value={flightValue}>
            {children}
        </FlightContext.Provider>
    )
}


export default FlightContextProvider