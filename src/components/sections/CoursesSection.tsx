import CourseCard from '../common/CourseCard'
import { coursesConfig } from '../../data/siteConfig'

const CoursesSection = () => {
  return (
    <section className="section" id="cursos">
      <div className="container d-flex fd-column g-3">
        <div className="section-head d-flex fd-column g-1">
          <p className="text text--xs c-primary">Especialidades</p>
          <h2 className="title title--lg">Cursos base del programa</h2>
        </div>
        <div className="g-layout g-layout--auto-fit-columns g-3">
          {coursesConfig.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
