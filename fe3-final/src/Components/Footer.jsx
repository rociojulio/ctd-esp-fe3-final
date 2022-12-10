
import React from "react";


const Footer = () => {

  return (
    <footer className="footer" >
      <section>
        <div>
          <p> Powered by </p>
        </div>
      </section>
      <section>
        <div>
          <img className="imageFooter"/>
        </div>
        <div className="socialMedia">
          <a href="a">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="b">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="b">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="a">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;