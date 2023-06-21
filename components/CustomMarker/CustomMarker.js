import { useCallback, useMemo } from "react"
import OverlayView from "../OverlayView"
import { motion } from "framer-motion"

export default function CustomMarker({ hotel, map, onClick, highlight }) {
  const price = useMemo(() => {
    return hotel.ratesSummary.minPrice.replace(/\.(.*?\d*)/g, "")
  }, [hotel])

  const handleClick = useCallback(() => {
    onClick(hotel)
  }, [onClick, hotel])

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: hotel.location.latitude,
            lng: hotel.location.longitude
          }}
          map={map}
          zIndex={highlight ? 99 : 0}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: Math.random() * 0.3 } }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            <button
              className={`rounded-full bg-zinc-600 py-1.5 px-2 drop-shadow text-xs text-white ${highlight &&
                "text-black bg-zinc-50 font-bold py-2 px-2.5"}`}
              onClick={handleClick}
            >{`$ ${price}`}</button>
          </motion.div>
        </OverlayView>
      )}
    </>
  )
}
