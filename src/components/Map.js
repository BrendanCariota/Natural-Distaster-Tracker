import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarkerWildfire from './LocationMarkerWildfire'
import LocationMarkerStorm from './LocationMarkerStorm'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [wildfireLocationInfo, setWildfireLocationInfo] = useState(null);
    const [stormLocationInfo, setStormLocationInfo] = useState(null);

    const wildfireMarkers = eventData.map(ev => {
        // This checks to see if it is a wildfire
        if(ev.categories[0].id === 8) {
            return  <LocationMarkerWildfire
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setWildfireLocationInfo({ id: ev.id, title: ev.title})}
            />
        }
        return null;
    })

    const stormMarkers = eventData.map(ev => {
        // This checks to see if it is a wildfire
        if(ev.categories[0].id === 10) {
            return  <LocationMarkerStorm
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setStormLocationInfo({ id: ev.id, title: ev.title})}
            />
        }
        return null;
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyCdZr97vr4E_pNyXEgH42J26qea_lbaXlU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
               { wildfireMarkers }
               { stormMarkers }
            </GoogleMapReact>
            {
                wildfireLocationInfo && <LocationInfoBox info={wildfireLocationInfo} />
            }
            {
                stormLocationInfo && <LocationInfoBox info={stormLocationInfo} />
            }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.875
    },
    zoom: 6
}

export default Map
