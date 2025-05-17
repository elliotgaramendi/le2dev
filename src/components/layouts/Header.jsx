const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--scroll">
        <div className="container d-flex a-items-center">
          <a href="#" className="f-1">
            <svg
              version="1.2"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 228 198"
              width="228"
              height="198"
              className="img img--logo"
            >
              <g>
                <path fill="#199afc"
                  d="M73.2 126.4c-15 15-15 39.3 0 54.3L19 126.4C4 111.5 4 87.2 19 72.2L73.2 18c15-15 39.2-15 54.2 0s15 39.2 0 54.2z">
                </path>
                <path fill="#1d5682"
                  d="m73.2 126.4 27.1-27.1 27.1 27.1c15 15 15 39.3 0 54.3-15 14.9-39.2 14.9-54.2 0-15-15-15-39.3 0-54.3z"></path>
                <g>
                  <path fill="#199afc"
                    d="M185.5 84.3c8.3-8.2 8.3-21.7 0-29.9l30 29.9c8.2 8.3 8.2 21.7 0 30l-30 30c-8.3 8.3-21.7 8.3-30 0s-8.3-21.7 0-30z">
                  </path>
                  <path fill="#1d5682"
                    d="m185.5 84.3-15 15-15-15c-8.3-8.2-8.3-21.7 0-29.9 8.3-8.3 21.7-8.3 30 0 8.3 8.2 8.3 21.7 0 29.9z"></path>
                </g>
              </g>
            </svg>
          </a>
          <div className="off-canvas off-canvas--right off-canvas--mobile" id="menu">
            <a
              href="#"
              className="off-canvas__backdrop"
            ></a>
            <div className="off-canvas__child">
              <ul className="f-2 list flexbox flexbox--center flexbox--responsive g-8">
                <li>
                  <a
                    href="#cursos"
                    className="link interactive interactive--lg d-flex a-items-center g-2"
                  >
                    <i className="bi bi-stars"></i>
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#retos"
                    className="link interactive interactive--lg d-flex a-items-center g-2"
                  >
                    <i className="bi bi-code-slash"></i>
                    Retos
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="link interactive interactive--lg d-flex a-items-center g-2"
                  >
                    <i className="bi bi-kanban"></i>
                    Proyectos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="f-1 d-flex a-items-center j-content-end g-4">
            <a href="#" className="button button--primary interactive interactive--lg d-flex a-items-center g-2">
              <i className="bi bi-person-hearts"></i>
              Iniciar sesión
            </a>
            <a href="#menu" className="md:d-none">
              <i className="bi bi-list title c-white"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;