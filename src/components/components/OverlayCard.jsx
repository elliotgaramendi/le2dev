const OverlayCard = ({ title, description, image, tags }) => {
  return (
    <a href="#" className="card card--overlay">
      <div className="card__body">
        <img
          src={image}
          alt={title}
          width="426"
          height="240"
          className="img img--background"
        />
        <ul className="list d-flex g-2">
          {tags.map((tag, index) => (
            <li key={index} className="badge badge--primary interactive interactive--sm">
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="title title--xs c-white">{title}</h3>
        <p className="text text--sm c-white">{description}</p>
      </div>
    </a>
  );
}

export default OverlayCard;