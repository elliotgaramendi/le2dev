import './App.css';
import Card from './Card';

function App() {
  const institutes = [
    {
      title: "Idat",
      description: "Instituto Idat con más de 35 años activando el potencial de los jóvenes. Entra y conoce nuestras carreras profesionales, Escuela de Coding y cursos virtuales."
    },
    {
      title: "Certus",
      description: "¡Carreras con futuro laboral! Encuentra las carreras técnicas, certificaciones y diplomas con más alta demanda en el mercado laboral. ¡Ingresa y conócenos!"
    },
    {
      title: "Tecsup",
      description: "Tecsup es una organización educativa privada sin fines de lucro, dedicada a formar y capacitar profesionales, así como brindar servicios de apoyo a los jóvenes y adultos que deseen emprender en el sector de la tecnología."
    }
  ];

  return (
    <div className="card-container">
      {institutes.map((element, index) => {
        const { title, description } = element;

        return (
          <Card
            key={index}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  )
}

export default App
