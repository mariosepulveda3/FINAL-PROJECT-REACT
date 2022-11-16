import React from "react";
import "./styles/WelcomeUser.scss";

const WelcomeUser = () => {
  return (
    <div className="welcome-user">
      <div className="card">
        <img
          src="https://pm1.narvii.com/6555/7ab2398321c4c5d2657922f401decc2df1192dab_hq.jpg"
          alt="img-profile"
          width="200px"
        />
        <div className="info">
          <h2>Nombre</h2>
          <p>Ciudad</p>
          <p>Edad</p>
          <h4>Email</h4>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
