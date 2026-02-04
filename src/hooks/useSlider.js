import { useLayoutEffect, useRef, useState } from "react";


function useSlider({ itemPerPage, items, deps }) {
    const [cardWidth, setCardWidth] = useState(0)
    const [index, setIndex] = useState(0)
    const totalPage = Math.ceil(items.length / itemPerPage)
    const cardWidthRef = useRef()
    const cardGap = useRef()


    useLayoutEffect(() => {
        if (!cardWidthRef.current || !cardGap.current) return

        const cardWidth = cardWidthRef.current.offsetWidth
        const containerStyles = getComputedStyle(cardGap.current);
        // const cardStyles = getComputedStyle(cardWidthRef.current)
        const gap = parseFloat(containerStyles.gap) || 0;

        setCardWidth(cardWidth + gap + 2)

    }, [deps]);

    const sliderBtnHandler = (id) => {
        setIndex(id)
    }

    const prevSliderBtn = () => {
        if (index > 0) {
            setIndex(prev => prev - 1)
        }
    }

    const nextSliderBtn = () => {

        if (index < totalPage - 1) {
            console.log(index, totalPage);
            setIndex(prev => prev + 1)

        }
    }
    return {
        index,
        totalPage,
        sliderBtnHandler,
        itemPerPage,
        cardWidthRef,
        cardGap,
        cardWidth,
        prevSliderBtn,
        nextSliderBtn
    }

}


export default useSlider