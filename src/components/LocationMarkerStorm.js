import React from 'react'
import { Icon } from '@iconify/react'
import locationIconStorm from '@iconify/icons-mdi/storm-advisory'

const LocationMarkerStorm = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIconStorm} className="location-icon-storm" />
        </div>
    )
}

export default LocationMarkerStorm