import { useEffect, useState } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickandmorty';

const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharactersData(data);
    };
    fetchData();
  }, []);


  return (
    <>
      <Characters data={charactersData} />
    </>
  );
};

export default CharactersPage;
