import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pages/404.css';

function NotFound() {
  return (
    <div className="nf">
      <div className="nf-msg">
        <p className="msg-nf">Estas perdido?</p>
        <p className="msg-home">
          Página no encontrada, ve a
          <Link to="/Home">
            <span className="nf-home"> Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
