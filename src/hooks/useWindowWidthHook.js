import { useState, useEffect } from "react";

function useWindowWidthHook() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return {windowWidth, setWindowWidth}
}

export default useWindowWidthHook