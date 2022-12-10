
import React from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ name, username, id }) => {
  const navegate = useNavigate();

  const addFav = () => {
    const favList = localStorage.getItem("favs");
    const list = favList ? JSON.parse(favList) : [];
    const fav = list.find(fav => fav.id === id);
    if(fav){
      alert('Dentist has already been added')
    } else{
        list.push({
          name,
          username,
          id,
        });
    
        localStorage.setItem("favs", JSON.stringify(list));
        alert('Dentist added successfully');
    }
    
  };

  const navegateToDetail = () =>{
    navegate(`./detail/${id}`);
  };

  return (
      <div className="card">
        <img className="imageCard" src={"#"} alt="doctor" />
        <p className="nameDentist" onClick={navegateToDetail}>{name}</p>
        <p className="userNameDentist">{username}</p>
        {/* En cada card deberan mostrar en name - username y el id */}
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          <i className="fa-sharp fa-solid fa-star"></i>
        </button>
      </div>
  );
};

export default Card;