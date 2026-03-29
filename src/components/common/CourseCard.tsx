import { Link } from 'react-router-dom'
import type { Course } from '../../data/siteConfig'

type CourseCardProps = {
  course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
  const content = (
    <article className="card__content d-flex fd-column g-2">
      <img src={course.image} alt={course.title} width="426" height="240" className="image image--background" />
      <ul className="d-flex fw-wrap g-1 list">
        {course.tags.map((tag) => (
          <li key={tag} className="badge interactive interactive--sm">
            {tag}
          </li>
        ))}
      </ul>
      <h3 className="title title--xs c-white">{course.title}</h3>
      <p className="text text--sm c-white">{course.description}</p>
    </article>
  )

  if (course.path) {
    return (
      <Link to={course.path} className="card card--overlay" aria-label={course.title}>
        {content}
      </Link>
    )
  }

  return (
    <a href="#" className="card card--overlay" aria-label={course.title}>
      {content}
    </a>
  )
}

export default CourseCard
