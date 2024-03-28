import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DentistStates } from '../Context/DentistContext'

const Navbar = () => {

  const {state, dispatch} = useContext(DentistStates)

  const action = {
    type: "DARK_THEME",
    payload: state.theme
  }

  return (
    <nav>
      <Link to={"/"}><h3>Home</h3></Link>
      <Link to={"/favs"}><h3>Favs</h3></Link>
      <Link to={"/contact"}><h3>Contacto</h3></Link>
      <button onClick={()=> dispatch(action)}>Change theme</button>
    </nav>
  )
}

export default Navbar