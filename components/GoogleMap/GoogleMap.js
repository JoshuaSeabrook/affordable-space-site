import { Status, Wrapper } from "@googlemaps/react-wrapper"
import { useMemo } from "react"
import Map from "../Map"
import Marker from "../CustomMarker"

const render = status => {
  if (status === Status.FAILURE) {
    return <p>failed</p>
  }
  return <p>loading...</p>
}

export default function GoogleMap({
  apiKey,
  onClick,
  onIdle,
  zoom,
  center,
  markers,
  onMarkerClick,
  highlightedMarkerId
}) {
  const filtered = useMemo(() => {
    return markers?.filter(m => m.location.latitude && m.location.longitude)
  }, [markers])

  return (
    <div className="flex h-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          className="grow h-full"
          center={center}
          zoom={zoom}
          minZoom={2}
          maxZoom={18}
          onIdle={onIdle}
          onClick={onClick}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          zoomControl={false}
          clickableIcons={false}
        >
          {filtered?.map(hotel => (
            <Marker
              key={hotel.hotelId || hotel.pclnId}
              hotel={hotel}
              onClick={onMarkerClick}
              highlight={hotel.hotelId === highlightedMarkerId}
            />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}
