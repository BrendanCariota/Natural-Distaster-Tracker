import React from 'react'
import { Icon } from '@iconify/react'
import checkedCheckbox from '@iconify/icons-mdi/check-box-outline'
import emptyCheckbox from '@iconify/icons-mdi/checkbox-blank-outline'

const ViewToggleBox = ({ wildfireToggle, setWildfireToggle, stormToggle, setStormToggle, volcanoToggle, setVolcanoToggle }) => {



    return (
        <div className="viewToggleBox">
            <div className="wildfireToggle toggle">
                <Icon 
                    icon={wildfireToggle ? checkedCheckbox : emptyCheckbox} 
                    className="check-icons" 
                    onClick={() => setWildfireToggle(!wildfireToggle)}
                />
                <h2>Wildfires</h2>
            </div>
            <div className="wildfireToggle toggle">
                <Icon 
                    icon={stormToggle ? checkedCheckbox : emptyCheckbox} 
                    className="check-icons" 
                    onClick={() => setStormToggle(!stormToggle)}
                />
                <h2>Severe Storms</h2>
            </div>
            <div className="wildfireToggle toggle">
                <Icon 
                    icon={volcanoToggle ? checkedCheckbox : emptyCheckbox} 
                    className="check-icons" 
                    onClick={() => setVolcanoToggle(!volcanoToggle)}
                />
                <h2>Volcanoes</h2>
            </div>
        </div>
    )
}

export default ViewToggleBox
