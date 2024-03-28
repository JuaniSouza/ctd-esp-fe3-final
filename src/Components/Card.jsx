import React, { useContext } from "react";
import { Link } from "react-router-dom"
import {DentistStates} from "../Context/DentistContext";


const Card = ({item}) => {

  const {name, username, id} = item
  const {dispatch} = useContext(DentistStates)

  return (
    <div className="card">
        <Link to={"/dentist/" + id}>
        <img src="assets/images/doctor.jpg" alt="doctor" />
        <h3>{name}</h3>
        <h4>{username}</h4>
        </Link>

        {
          location.pathname === "/" 
          ? <button onClick={()=> dispatch({type:"ADD_FAV", payload:item})} className="favButton">Add Fav</button>
          
          : <button onClick={()=> dispatch({type:"ELIMINAR_FAV", payload:id})} className="favButton">Eliminar Fav</button>
        }

      </div>
  );
};

export default Card;
