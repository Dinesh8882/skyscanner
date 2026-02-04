import React from 'react'
import { NavLink } from 'react-router-dom'

function TabButton({ itemName, tabLink, iconName: Icon, tabButton, active }) {
  return (
    <NavLink
      to={tabLink}
      onClick={() => tabButton(tabLink)}
      className={`
      flex gap-1 w-fit whitespace-nowrap items-center text-white 
      ${active === tabLink || (active === "/" && itemName === "Flights") ? "bg-[#0062e3]" : "border"} 
      text-[14px] px-4 py-1.25 rounded-2xl
      `}>

      <Icon />
      {itemName}
    </NavLink>
  )
}

export default TabButton
