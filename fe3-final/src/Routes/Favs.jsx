import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../Components/utils/Theme";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const [favs, setFavs] = useState();

  useEffect(() => {
    const favItems = localStorage.getItem("favs");
    const list = favItems ? JSON.parse(favItems) : [];
    setFavs(list);
  }, []);

  // const removeFav = () => {

  //   const favList = localStorage.getItem("favs");
  //   const list = favList ? JSON.parse(favList) : [];

  //   const newList = list.filter(fav => fav.id !== id);

  //   localStorage.setItem("favs", JSON.stringify(newList));
  // };

  function renderFavs() {
    if (!favs) {
      return <div>Loading</div>;
    } else if (favs.length === 0) {
      return <div>You don't have favs</div>;
    } else {
      return favs.map((fav, i) => {
        return (
          <Card name={fav.name} username={fav.username} id={fav.id} key={i} />
        );
      });
    }
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme === "dark" ? "dark" : "light"}`}>
        {renderFavs()}
      </div>
    </>
  );
};

export default Favs;
