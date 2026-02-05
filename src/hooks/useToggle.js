import React, { useState } from 'react'

function useToggle(isOpen = false) {
    const [toggle, setToggle] = useState(isOpen)

    const togglerHandler = () => {
        setToggle(prev => !prev)
    }

    return {
        toggle,
        togglerHandler,
    }

}


export default useToggle