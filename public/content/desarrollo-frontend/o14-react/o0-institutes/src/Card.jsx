const Card = (props) => {
  const { title, description } = props;

  return (
    <div className="card">
      <h2>
        {title}
      </h2>
      <p>
        {description}
      </p>
    </div>
  )
};

export default Card;
