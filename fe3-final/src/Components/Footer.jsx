
import React, {useContext}from "react";
import ThemeContext from "../Components/utils/Theme";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import logoDH from "../images/DH.png";
import "../styles/footer.css"



const Footer = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <footer className={theme === "dark" ? "dark" : "light"} id="footer">
      <section className="goBack">
        <a href="a">VOLVER ARRIBA</a>
      </section>
      <section className="logo-redes">
      <div>
          <img className="imageFooter" src={logoDH}/>
        </div>
        <div className="redesSociales">
          <a href="https://www.facebook.com">
          <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
          <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/es/">
          <FaTiktok />
          </a>
          <a href="https://www.whatsapp.com/?lang=es">
          <FaWhatsapp />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;