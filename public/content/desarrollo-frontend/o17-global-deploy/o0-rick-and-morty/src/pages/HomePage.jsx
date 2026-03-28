import { useEffect, useState } from 'react';
import Characters from '../components/Characters';
import Hero from '../components/Hero';
import { getCharacters } from '../services/rickandmorty';

const HomePage = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharactersData(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(charactersData);
  // }, [charactersData]);

  return (
    <>
      <Hero />
      <Characters data={charactersData} />
    </>
  );
};

export default HomePage;
