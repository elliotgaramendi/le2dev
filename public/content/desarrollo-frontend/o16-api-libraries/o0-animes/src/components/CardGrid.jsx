import Card from './Card';

const CardGrid = () => {
  const data = [...Array(8)];

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
