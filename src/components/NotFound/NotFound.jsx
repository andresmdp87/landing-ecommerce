import { Link } from "react-router-dom";
import  "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 style={{ fontSize: "6rem", color: "#ff6b6b", margin: 0 }}>404</h1>
      <h2 style={{ margin: "10px 0 20px" }}>Página no encontrada</h2>
      <p style={{ marginBottom: "30px" }}>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="notFound-link"
      onMouseEnter={e => e.target.style.backgroundColor = "#ff6b6b"}
      onMouseLeave={e => e.target.style.backgroundColor = "#333"}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;