const Profile = () => {
  return (
    <main className="profile">
      <header className="profile__header">
        <img
          src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Felix&backgroundColor=ffe4e1"
          alt="Avatar de perfil"
          className="profile__avatar"
          width="128"
          height="128"
        />
        <h1 className="profile__title">Bienvenido a mi primera página en React</h1>
      </header>
      <section className="profile__content">
        <div>
          <h2 className="profile__subtitle">Sobre mí</h2>
          <p className="profile__description">
            Hola, soy un desarrollador aprendiendo React. Este es mi primer
            proyecto y estoy emocionado de comenzar este viaje en el desarrollo
            web moderno.
          </p>
        </div>
        <div>
          <h2 className="profile__subtitle">Mis intereses</h2>
          <ul className="profile__list">
            <li className="profile__list-item">Programación web</li>
            <li className="profile__list-item">Diseño de interfaces</li>
            <li className="profile__list-item">Aprender nuevas tecnologías</li>
          </ul>
        </div>
      </section>
      <footer className="profile__footer">
        <p className="profile__footer-text">© 2025 - Mi Primera Página React</p>
      </footer>
    </main>
  );
};

export default Profile;
