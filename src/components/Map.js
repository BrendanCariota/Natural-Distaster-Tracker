import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarkerWildfire from './LocationMarkerWildfire'
import LocationMarkerStorm from './LocationMarkerStorm'
import LocationMarkerVolcano from './LocationMarkerVolcano'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    // const [wildfireLocationInfo, setWildfireLocationInfo] = useState(null);
    // const [stormLocationInfo, setStormLocationInfo] = useState(null);
    const [allInfo, setAllInfo] = useState('Cant be null');

    // --- WILDFIRE MARKERS ---
    const wildfireMarkers = eventData.map(ev => {
        // This checks to see if it is a wildfire
        if(ev.categories[0].id === 8) {
            return  <LocationMarkerWildfire
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => {setAllInfo({ id: ev.id, title: ev.title})
            }}
            />
        }
        return null;
    })

    // --- STORM MARKERS ---
    const stormMarkers = eventData.map(ev => {
        // This checks to see if it is a storm
        if(ev.categories[0].id === 10) {
            return  <LocationMarkerStorm
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => {setAllInfo({ id: ev.id, title: ev.title})
            }}
            />
        }
        return null;
    })

    // --- VOLCANO MARKERS ---
    const volcanoMarkers = eventData.map(ev => {
        // This checks to see if it is a volcano, but does not include this specific one because the cooridinates are screwed up on NASA's site
        if(ev.categories[0].id === 12 && ev.title !== "Dukono Volcano, Indonesia") {
            return  <LocationMarkerVolcano
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => {setAllInfo({ id: ev.id, title: ev.title})
            }}
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
               { volcanoMarkers }
            </GoogleMapReact>
            <LocationInfoBox info={allInfo} />
            
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.875
    },
    zoom: 3
}

export default Map
