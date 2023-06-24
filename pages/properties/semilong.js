import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import SemilongPage from "../../components/Properties/SemilongPage";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import { useQuery } from "@tanstack/react-query"
import Head from "next/head"
import { useCallback, useState } from "react"
import GoogleMap from "../../components/GoogleMap"

const Properties = () => {
  const [center, setCenter] = useState({
    lat: 52.24748,
    lng: -0.9006
  })

  const [zoom, setZoom] = useState(16)

  const onIdle = map => {
    setZoom(map.getZoom())

    const nextCenter = map.getCenter()

    if (nextCenter) {
      setCenter(nextCenter.toJSON())
    }
  }

  const [highlightedHotel, setHighlightedHotel] = useState(null)

  const onMarkerClick = useCallback(
    payload => {
      if (highlightedHotel === payload) {
        setHighlightedHotel(null)
      } else {
        setHighlightedHotel(payload)
      }
    },
    [highlightedHotel]
  )

  return (
    <>
      <SeoHead title='Affordable Space' />
      <Layout>
        <SemilongPage />
        <div className="h-screen">
          <div className="h-3/4 w-full sm:w-5/6 max-w-screen-xl mt-24 px-0 xl:px-16 mx-0 sm:mx-auto">
            <GoogleMap
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
              center={center}
              zoom={zoom}
              onIdle={onIdle}
              onMarkerClick={onMarkerClick}
              highlightedMarkerId={highlightedHotel?.hotelId}
              latitude={52.24748}
              longitude={-0.9006}
            />
          </div>
          <div>
            {highlightedHotel && (
              <Card
                name={highlightedHotel.name}
                stars={highlightedHotel.starRating}
                imgUrl={highlightedHotel.thumbnailUrl}
                address={`${highlightedHotel.location.address.addressLine1}, ${highlightedHotel.location.address.cityName}`}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Properties
