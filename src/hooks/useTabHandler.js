import { useState } from "react";

function useTabActive(isActive) {
    const [activeTab, setIsActiveTab] = useState(isActive)

    const isActiveHandler = (tabs) => {
        setIsActiveTab(tabs)
    }

    return {
        activeTab,
        isActiveHandler
    }
}

export default useTabActive