import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import clsx from "clsx";

interface Props {
  activeIndex: number,
}

export function EyewearContainer({ activeIndex }: Props) {
  const eyewears = [
    {
      src: 'eyewear1.png',
      angle: ((3/2) * Math.PI),
    },
    {
      src: 'eyewear2.png',
      angle: 0,
    },
    {
      src: 'eyewear3.png',
      angle: (Math.PI / 2),
    },
  ]

  const { width, height } = useScreenSize() 
  const isMobile = width < 768 ;
  
  const EyewearWidth = isMobile ? 188 : 320 ;
  
  const [containerSize, setContainerSize] = useState(0);
  
  const distance = (containerSize / 2) - (EyewearWidth / 2)
  
  useEffect(() => {
    setContainerSize(isMobile ? height : width)
  }, [width])

  return (
    <div 
      style={{ rotate: `${ activeIndex * -90 }deg` }}
      className={clsx(
        "absolute left-0 top-3/4 md:top-[38%] w-full aspect-square flex items-center justify-center",
        activeIndex != 0 && "duration-1000 ease-in-out"
      )}
    >
      {eyewears.map((item, index) => {

        const x = Math.cos(item.angle) * distance ;
        const y = Math.sin(item.angle) * distance ;
        
        const angle = index * 90 ;

        return (
          <div
            key={index}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <img 
              src={item.src} 
              alt="Eye Wear"
              style={{ rotate: `${angle}deg`, width: EyewearWidth }}
            />
          </div>
        )
      })}
    </div>
  )
}