import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Dentist = () => {
  const[dentist, setDentist] = useState({})
  const params = useParams()
  console.log(dentist);

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users/"+params.id)
    .then(res=>setDentist(res.data))
  }, [])

  return (
    <div className='section'>
        <table>
          <thead>
            <tr>
              <th>Nombre y apellido</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
          </tbody>
        </table>
    </div>
  );
};



export default Dentist