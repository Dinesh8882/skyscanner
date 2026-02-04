import React, { useState } from 'react'

function useToggle(isOpen = false) {
    const [toggle, setToggle] = useState(isOpen)

    const togglerHandler = () => {
        console.log("helo");
        
        setToggle(prev => !prev)
    }

    return {
        toggle, 
        togglerHandler
    }

}


export default useToggle