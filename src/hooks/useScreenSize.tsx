import { useEffect, useState } from "react";

function useScreenSize() {

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowsSize] = useState(getSize);

  useEffect( function () {
    
    function handleResize() {
      setWindowsSize(getSize()) ;
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
    
  }, []);

  return windowSize
}

export default useScreenSize