import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import "../styles/detail.css";


import ThemeContext from '../Components/utils/Theme';
 import { getDentistById } from "../api/api.jsx"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme} = useContext(ThemeContext);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const [dentist, setDentist] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    getDentistById(params.id).then((response) => {
      if(response.data){
        setDentist(response.data);
        console.log(response.data);
        setError(false);
      } else{
        setError(true);
      }
    });
  }, [params.id]);

  function renderDentist() {
    if(!dentist){
      return <div>Loading</div>;
    } else{
      return(
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
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
    )}
  }

  return (
    <>
      
      <div className={theme === "dark" ? 'dark' : 'light'}>
      <h1>Detail Dentist id </h1>
        {error ? <div>There was an error</div> : renderDentist()}
      </div>
    </>
  )
}

export default Detail