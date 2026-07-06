import { useEffect } from "react";
import { useLocation } from 'react-router-dom'


const MERTRIKA_ID = 110434692


const MetrikaPreview = () => {

  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(MERTRIKA_ID, 'hit', location.pathname + location.search);
    }
  }, [location])

  return null
}

export default MetrikaPreview