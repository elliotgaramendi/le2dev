import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none h4 lh-1"
              aria-label="Bootstrap"
            >
              <i className="bi bi-bootstrap-fill"></i>
            </Link> <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span> </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary h4" href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary h4" href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
