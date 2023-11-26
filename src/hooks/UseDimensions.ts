import { useEffect, useState } from 'react'

const getWidth = (): number => window.innerWidth ??
document.documentElement.clientWidth ??
document.body.clientWidth

const getHeight = (): number => window.innerHeight ??
document.documentElement.clientHeight ??
document.body.clientHeight
const SCALE = 1 
export const useDimensions = (): number[] => {
  const [width, setWidth] = useState(getWidth()*SCALE)
  const [height, setHeight] = useState(getHeight()*SCALE)
  useEffect(() => {
    const resizeListener = (): void => {
      setWidth(getWidth()*SCALE)
      setHeight(getHeight()*SCALE)
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return [width, height]
}
