import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyCdZr97vr4E_pNyXEgH42J26qea_lbaXlU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>
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
