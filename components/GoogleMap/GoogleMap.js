import { Status, Wrapper } from "@googlemaps/react-wrapper"
import { useMemo } from "react"
import Map from "../Map"

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
  latitude,
  longitude
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
          latitude={latitude}
          longitude={longitude}
        >
        </Map>
      </Wrapper>
    </div>
  )
}
