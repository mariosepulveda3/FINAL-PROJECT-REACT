import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLink = ({ route, name }) => {
  return (
    <NavLink to={route} activeclassname="active">
        {name}
    </NavLink>

  )
}

export default NavBarLink