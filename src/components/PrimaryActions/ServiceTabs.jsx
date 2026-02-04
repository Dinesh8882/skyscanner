import React from 'react'
import { quickActionsData } from '../../config/quickActionsData.config'
import PrimaryActions from './PrimaryActions'

function ServiceTabs() {
    return (
        <div className='
            flex
            overflow-x-scroll
            gap-3
            flex-nowrap
            no-scrollbar

            sm:flex-wrap
            sm:grid sm:grid-cols-3 
            sm:gap-7 my-11
            sm:overflow-hidden
            '>
            {
                quickActionsData.map((item) => (
                    <PrimaryActions
                        key={item.id}
                        label={item.label}
                        icon={item.icon}
                        id={item.id}
                    />
                ))
            }
        </div>
    )
}

export default ServiceTabs
