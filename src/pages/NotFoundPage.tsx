import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="section">
      <div className="container d-flex fd-column ai-center g-2 ta-center">
        <h1 className="title title--lg">404</h1>
        <p className="text text--md c-ash300">La ruta no existe en este momento.</p>
        <Link to="/frontend" className="button button--primary interactive">Ir al inicio</Link>
      </div>
    </section>
  )
}

export default NotFoundPage
