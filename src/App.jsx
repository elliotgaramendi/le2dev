import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/modules/Hero";

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
