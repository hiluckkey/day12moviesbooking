import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Night show
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a></Link>
              <Link to="/features">
               <a class="nav-link" href="#">
                Features
              </a></Link>
              
             <Link to="/pricing">
             <a class="nav-link" href="#">
                Pricing
              </a></Link>
              
              <Link to="/booking">
              <a class="nav-link" href="#">
                Booking
              </a></Link>
              
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
