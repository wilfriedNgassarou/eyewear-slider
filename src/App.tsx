import { useState } from "react";
import { EyewearContainer } from "./components/eyewear-container";
import { TextsContainer } from "./components/texts-container";
import clsx from "clsx";
import { Credits } from "./components/credits";

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  function handleClick() {
    if(activeIndex > 0) return 

    setActiveIndex(1)

    setTimeout(() => {
      setActiveIndex(2)

      setTimeout(() => {
        setActiveIndex(3)

        setTimeout(() => {
          setActiveIndex(0)
        }, 1500);
      }, 1500);
    }, 1500);
  }

  
  return (
    <section className="h-dvh w-full flex justify-center bg-gray-50 relative overflow-hidden">
      <Credits />
      <div className="absolute left-0 top-20 lg:top-8 w-full flex justify-center">
        <span
          onClick={handleClick} 
          className={clsx(
            "py-2 px-8 text-white bg-blue-500 rounded-full font-legend font-medium duration-150",
            activeIndex > 0 ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'
          )}
        >
          Start
        </span>
      </div>
      <TextsContainer activeIndex={activeIndex} />
      <EyewearContainer activeIndex={activeIndex} />
    </section>
  )
}

export default App
