import { useCharactersStore } from '../store/characters.store';

const Characters = ({ data }) => {
  const { setCharactersData } = useCharactersStore();

  return (
    <section className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((character) => {
            const { id, name, status, species, gender, image } = character;

            return (
              <div className="col" key={id}>
                <div className="card shadow-sm">
                  <img
                    src={image}
                    alt={name}
                    className="card-img-top object-fit-cover"
                    height="225"
                  />
                  <div className="card-body">
                    <p className="card-text">{name} - {gender}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          {status}
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          {species}
                        </button>
                      </div>
                      <small
                        className="text-body-secondary">9 mins
                      </small>
                      <button
                        className="btn btn-primary"
                        onClick={() => setCharactersData(character)}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default Characters;
