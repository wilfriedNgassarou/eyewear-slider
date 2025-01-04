import clsx from "clsx"

interface Props {
  activeIndex: number
}

export function TextsContainer({ activeIndex }: Props) {
  const firstsWords = ['éloise', 'marc', 'lucien'];
  const secondsWords = ['lafleur', 'delacroix', 'verreur'];

  return (
    <>
      {/* middle texts */}
      <div className="absolute top-2/4 md:top-1/3 flex flex-col items-center text-6xl md:text-9xl">
        <span className="flex justify-center items-center relative w-80 h-[68px] md:h-28 overflow-hidden">
          {firstsWords.map((item, index, array) => {
            const isLastIndex = index == (array.length - 1)
            const hideCls = isLastIndex ? 'translate-y-28' : '-translate-y-28'

            return (
              <span
                key={`first-${index}`}
                className={clsx(
                  "absolute top-4 uppercase",
                  activeIndex != 0 && "duration-700 ease-in-out",
                  index == 0 ? 'text-[#CBB7A4]' : index == 1 ? 'text-[#9F9F9F]' : 'text-[#B49393]',
                  activeIndex < index && "translate-y-28",
                  activeIndex == index && "translate-y-0",
                  activeIndex > index && hideCls,
                )}
              >
                {item}
              </span>
            )
          })}
        </span>
        <span className="flex justify-center items-center relative w-[700px] h-14 md:h-24 overflow-hidden">
          {secondsWords.map((item, index, array) => {
            const isLastIndex = index == (array.length - 1)
            const hideCls = isLastIndex ? 'translate-y-28' : '-translate-y-28'

            return (
              <span
                className={clsx(
                  "absolute top-0 uppercase -translate-y-28",
                  activeIndex != 0 && "duration-700 ease-in-out",
                  activeIndex < index && "translate-y-28",
                  activeIndex == index && "translate-y-0",
                  activeIndex > index && hideCls,
                  index == 0 ? 'text-[#CBB7A4]' : index == 1 ? 'text-[#9F9F9F]' : 'text-[#B49393]'
                )}
              >
                {item}
              </span>
            )
          })}
        </span>
      </div>
      {/* bottom text  */}
      <div className="absolute left-0 bottom-6 w-full flex justify-center">
        <span className="inline-block overflow-hidden">
          <span
            className={clsx(
              "font-medium inline-block font-legend",
              activeIndex != 0 && "duration-700 ease-in-out",
              activeIndex == 0 ? "text-[#CBB7A4]" : activeIndex == 1 ? "text-[#9F9F9F]" : "text-[#B49393]",
              activeIndex > 2 && " translate-y-10"
            )}
          >
            EYEGLASSES COLLECTION 2025 ⓒ
          </span>
        </span>
      </div></>
  )
}