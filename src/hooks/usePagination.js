import { useState } from "react";

function usePagination(items = [], itemPerPage = 9) {
    const [page, setPage] = useState(0)
    const totalPage = Math.ceil(items.length / itemPerPage)

    const startIndex = itemPerPage * page
    const endIndex = startIndex + itemPerPage

    const currentItems = items.slice(startIndex, endIndex)

    const gridCols =
        currentItems.length <= 3
            ? "sm:grid-cols-1  min-w-full"
            : currentItems.length <= 6
                ? "sm:grid-cols-2 w-xl "
                : "sm:grid-cols-3 min-w-full";

    const pageVisit = (pageNumeber) => {
        if (pageNumeber >= 0 && pageNumeber < totalPage) {
            setPage(pageNumeber)
        }
    }

    return {
        page,
        currentItems,
        pageVisit,
        setPage,
        totalPage,
        gridCols
    }
}


export default usePagination