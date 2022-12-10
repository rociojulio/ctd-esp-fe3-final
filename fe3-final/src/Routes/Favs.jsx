import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../Components/utils/Theme";
import "../styles/favs.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const [favs, setFavs] = useState();

  useEffect(() => {
    const favItems = localStorage.getItem("favs");
    const list = favItems ? JSON.parse(favItems) : [];
    setFavs(list);
  }, []);

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
      <div className={theme === "dark" ? "dark" : "light"}>
        <h1>Dentists Favs</h1>
        <div className="grid-cards">
        {renderFavs()}
        </div>

      </div>
    </>
  );
};

export default Favs;
