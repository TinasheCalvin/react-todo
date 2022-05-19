import React, { useState, useEffect } from 'react'

function useWindowSize() {
    const [size,setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setSize({ height: window.innerHeight, width: window.innerWidth})
        }
        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])
    
    return size
}

export default useWindowSize