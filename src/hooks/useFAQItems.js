import React, { useState } from 'react'

function useFAQItems(items = []) {

    const [data, setData] = useState(items)

    const isOpenHandler = (id) => {
        setData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isOpen: !item.isOpen }
                    : item
            ))
    }


    return { isOpenHandler, data }
}



export default useFAQItems