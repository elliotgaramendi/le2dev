import { Link, NavLink } from 'react-router';
import { useCharactersStore } from '../store/characters.store';

const Navbar = () => {
  const { charactersData } = useCharactersStore();

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">Rick & Morty</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="Characters" to="/characters">Characters</NavLink>
              </li>
            </ul>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i className="bi bi-person-add"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">List of joined</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {charactersData.map((element) => {
            const { id, name, species, image } = element;
            return (
              <div className="card mb-3" style={{ maxWidth: '540px' }} key={id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{name} - {species}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
