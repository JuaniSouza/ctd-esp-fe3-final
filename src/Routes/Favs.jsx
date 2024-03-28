import React from "react";
import Card from "../Components/Card";


const Favs = () => {

const favoritos = JSON.parse(localStorage.getItem('favs') )|| []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favoritos.map((item)=> <Card key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default Favs;
