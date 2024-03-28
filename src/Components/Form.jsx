import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const datos = {email, name}

  const handleSubmit = (e) => {
    e.preventDefault
    if (name.length >= 5 && email.includes("@"))
    {
      {console.log(datos)}
      setShow(true)
      setError(false)
    } else{
      setError(true)
    }
  }

  return (
    <div>
      
      {show ? <div>Gracias {name}, te contactaremos cuanto antes vía mail</div> :
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input type="text" name="name" placeholder="Aqui" onChange={(event) => setName(event.target.value)} />
        <br />
        <label>Coloque su Email:</label>
        <input type="email" name="email" placeholder="Aqui" onChange={(event) => setEmail(event.target.value)} />
        <br />
        <button type="submit">Enviar</button>
      </form>

      }

      {error && alert("Por favor verifique su información nuevamente")}


    </div>
  );
};

export default Form;
