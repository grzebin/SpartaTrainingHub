
import { useEffect, useRef, useState } from 'react'

export function useCardFit(layoutKey: string) {
  const cardRef = useRef<HTMLElement>(null)

  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    const card = cardRef.current

    if (!card) return

    let frame = 0
    let disposed = false

    const checkFit = () => {
      if (disposed) return

      const regions = [
        card,
        ...Array.from(
          card.querySelectorAll<HTMLElement>(
            '[data-fit-region]'
          )
        ),
      ]

      const exceedsCapacity = regions.some(
        (region) =>
          region.scrollHeight > region.clientHeight + 2 ||
          region.scrollWidth > region.clientWidth + 2
      )

      setOverflow(exceedsCapacity)
    }

    const scheduleCheck = () => {
      if (disposed) return

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(checkFit)
    }

    const observer = new ResizeObserver(scheduleCheck)

    observer.observe(card)

    card
      .querySelectorAll<HTMLElement>('[data-fit-region]')
      .forEach((region) => observer.observe(region))

    card.addEventListener('load', scheduleCheck, true)

    document.fonts.ready.then(scheduleCheck)

    scheduleCheck()

    return () => {
      disposed = true
      observer.disconnect()
      cancelAnimationFrame(frame)

      card.removeEventListener(
        'load',
        scheduleCheck,
        true
      )
    }
  }, [layoutKey])

  return {
    cardRef,
    overflow,
    fits: !overflow,
  }
}
