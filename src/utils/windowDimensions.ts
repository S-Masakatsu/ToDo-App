import {useState, useEffect} from 'react'

/**
 * 画面サイズを取得するCustom Hooks
 */
export const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return {width, height}
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return windowDimensions
}