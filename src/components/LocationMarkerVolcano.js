import React from 'react'
import { Icon } from '@iconify/react'
import locationIconVolcano from '@iconify/icons-mdi/mountain'

const LocationMarkerVolcano = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIconVolcano} className="location-icon-volcano" />
        </div>
    )
}

export default LocationMarkerVolcano