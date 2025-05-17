const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container g-layout g-layout--auto-fit-columns g-5">
          <div className="d-flex f-direction-column g-2">
            <a href="#">
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
            <h2 className="interactive interactive--lg">Elliot Garamendi</h2>
            <p className="text text--xs">
              Aprende desarrollo web gratis con los mejores. El mejor centro educativo del Perú, aprende todo en un
              solo lugar gratis e impulsa tu futuro.
            </p>
          </div>
          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Le2Dev</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a href="#cursos" className="link interactive interactive--sm">Cursos</a>
              </li>
              <li>
                <a href="#proyectos" className="link interactive interactive--sm">Proyectos</a>
              </li>
              <li>
                <a href="#retos" className="link interactive interactive--sm">Retos</a>
              </li>
            </ul>
          </div>
          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Cursos</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a href="#" className="link interactive interactive--sm">Diseño UX-UI</a>
              </li>
              <li>
                <a href="#" className="link interactive interactive--sm">Desarrollo Frontend</a>
              </li>
              <li>
                <a href="#" className="link interactive interactive--sm">Creación de Aplicaciones con IA</a>
              </li>
            </ul>
          </div>
          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Redes Sociales</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a href="https://www.youtube.com/@elliotgaramendi" className="link interactive interactive--sm">YouTube</a>
              </li>
              <li>
                <a href="https://github.com/elliotgaramendi" className="link interactive interactive--sm">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/elliotgaramendi/"
                  className="link interactive interactive--sm">LinkedIn</a>
              </li>
              <li>
                <a href="https://x.com/elliotgaramendi" className="link interactive interactive--sm">X</a>
              </li>
              <li>
                <a href="https://www.instagram.com/elliotgaramendi/"
                  className="link interactive interactive--sm">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav">
        <div className="container flexbox flexbox--centered-spacing flexbox--responsive g-2">
          <h2 className="interactive interactive--xs">
            <a href="https://www.instagram.com/elliotgaramendi/" className="link interactive interactive--xs">
              Elliot Garamendi</a> &copy; 2025 <a href="https://www.linkedin.com/in/elliotgaramendi/" className="link interactive interactive--sm">
              Le2Dev.
            </a>
            Todos los derechos reservados.
          </h2>
          <h2 className="interactive interactive--xs">
            Made with ♥️ by: <a href="https://www.instagram.com/elliotgaramendi/" className="link interactive interactive--xs">
              Elliot Garamendi
            </a>
          </h2>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;