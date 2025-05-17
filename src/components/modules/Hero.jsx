import { coursesData } from "../../data/coursesData";
import OverlayCardList from "../widgets/OverlayCardList";

const Hero = () => {
  return (
    <article className="hero">
      <div className="container d-flex f-direction-column g-10">
        <div className="d-flex f-direction-column a-items-center g-4">
          <h1 className="hero__title t-align-center">Conviértete en <span className="c-primary">AI Engineer</span> gratis con los mejores</h1>
          <p className="hero__paragraph t-align-center">El mejor centro educativo del Perú, aprende todo en un solo lugar, gratis e impulsa tu futuro.</p>
          <a href="#contact" className="button button--primary interactive interactive--xl">
            🧑‍💻
            Empezar a aprender
          </a>
        </div>
        <OverlayCardList data={coursesData} id="cursos" />
      </div>
    </article>
  );
}

export default Hero;