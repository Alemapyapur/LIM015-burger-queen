import { Link } from "react-router-dom";
import app from "../../fb-config";
import burgerLogo from "../../img/burger-logo.png";
import "../../styles/nav-footer/nav.css";
import { getAuth, signOut } from "firebase/auth";

function Navigation() {
const auth = getAuth(app);

  return (
    <nav className="navBar">
      <img src={burgerLogo} className="nav-logo" alt="Burguer Queen Logo" />

      <Link className="title-nav1" to="/Home">
        HOME
      </Link>
      <Link className="title-nav2" to="/Waiter">
        WAITER
      </Link>
      <Link className="btn-sign-out" onClick={() => signOut(auth)}>
        CERRAR SESIÓN
      </Link>
    </nav>
  );
}

export default Navigation;
