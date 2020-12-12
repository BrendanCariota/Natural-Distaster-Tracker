import React from 'react'
import { Icon } from '@iconify/react'
import locationIconWildfire from '@iconify/icons-mdi/fire-alert'

const LocationMarkerWildfire = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIconWildfire} className="location-icon-wildfire" />
        </div>
    )
}

export default LocationMarkerWildfire
