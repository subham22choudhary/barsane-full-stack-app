import images from "./img";

import "./header.css";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="navbar navbar-expand-md  cls-1 mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={images[0]} className="img-fluid img1" alt="Image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
