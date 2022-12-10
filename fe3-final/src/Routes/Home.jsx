import React, { useState, useEffect, useContext } from "react";

import Card from "../Components/Card";
import ThemeContext from "../Components/utils/Theme";
import Data from "../Components/utils/Data";
import { getDentists } from "../api/api";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [error, setError] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { dentists, setDentists } = useContext(Data);

  useEffect(() => {
    getDentists().then((response) => {
      if (response.data) {
        setDentists(response.data);
        setError(false);
      } else {
        setError(true);
      }
    });
  }, []);

  function renderDentists() {
    if (!dentists) {
      return <div>Loading</div>;
    } else if (dentists.length === 0) {
      return <div>You don't have dentists</div>;
    } else {
      return dentists.map((fav, i) => {
        return (
          <Card name={fav.name} username={fav.username} id={fav.id} key={i} />
        );
      });
    }
  }

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {error ? <div>There was an error</div> : renderDentists()}
      </div>
    </main>
  );
};

export default Home;
