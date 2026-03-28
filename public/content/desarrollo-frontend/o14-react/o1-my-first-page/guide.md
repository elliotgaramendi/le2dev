# Proyecto 0: "Mi Primera Página en React"

## Estructura del Proyecto

```
my-first-page/
├── src/
│   ├── App.jsx
│   └── index.css
├── index.html
└── package.json
```

---

## Archivos y Código

### 📄 `src/App.jsx`

```jsx
function App() {
  return (
    <main className="profile">
      <header className="profile__header">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
          alt="Avatar de perfil" 
          className="profile__avatar"
        />
        <h1 className="profile__title">Bienvenido a mi primera página en React</h1>
      </header>

      <section className="profile__content">
        <h2 className="profile__subtitle">Sobre mí</h2>
        <p className="profile__description">
          Hola, soy un desarrollador aprendiendo React. Este es mi primer proyecto 
          y estoy emocionado de comenzar este viaje en el desarrollo web moderno.
        </p>
        
        <h2 className="profile__subtitle">Mis intereses</h2>
        <ul className="profile__list">
          <li className="profile__list-item">Programación web</li>
          <li className="profile__list-item">Diseño de interfaces</li>
          <li className="profile__list-item">Aprender nuevas tecnologías</li>
        </ul>
      </section>

      <footer className="profile__footer">
        <p className="profile__footer-text">© 2024 - Mi Primera Página React</p>
      </footer>
    </main>
  );
}

export default App;
```

---

### 📄 `src/index.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  padding: 40px;
}

.profile__header {
  text-align: center;
  margin-bottom: 30px;
}

.profile__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #667eea;
  margin-bottom: 20px;
}

.profile__title {
  font-size: 28px;
  color: #2d3748;
  margin-bottom: 10px;
}

.profile__content {
  margin-bottom: 30px;
}

.profile__subtitle {
  font-size: 20px;
  color: #4a5568;
  margin-bottom: 12px;
  margin-top: 20px;
}

.profile__description {
  font-size: 16px;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 20px;
}

.profile__list {
  list-style: none;
  padding-left: 0;
}

.profile__list-item {
  font-size: 16px;
  color: #718096;
  padding: 10px 0;
  padding-left: 24px;
  position: relative;
}

.profile__list-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.profile__footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.profile__footer-text {
  font-size: 14px;
  color: #a0aec0;
}
```

---

## 🎯 Conceptos que aprendes:

1. **Estructura JSX**: Cómo escribir HTML dentro de JavaScript
2. **Componente funcional**: `function App() { return (...) }`
3. **className**: En React usamos `className` en vez de `class`
4. **HTML semántico**: `<main>`, `<header>`, `<section>`, `<footer>`
5. **BEM**: Metodología para nombrar clases CSS
6. **Export/Import**: `export default App`

---

## 🚀 Para correr el proyecto:

```bash
npm create vite@latest my-first-page -- --template react
cd my-first-page
npm install
npm run dev
```

Luego reemplaza el contenido de `App.jsx` e `index.css` con el código de arriba.
