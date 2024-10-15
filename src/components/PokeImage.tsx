import { useEffect, useState } from 'react';

interface PokeProps {
  id: number;
}

export const PokeImage: React.FC<PokeProps> = ({ id }) => {
  const [pokeImage, setPokeImage] = useState('');
  const [pokeName, setPokeName] = useState('');

  // const fetchPokeImage = async () => {
  //   try {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
  //       mode: 'cors',
  //     });
  //     const data = await response.json();
  //     setPokeImage(data.sprites.other['official-artwork'].front_default);
  //     setPokeName(data.name);
  //   } catch (error) {
  //     console.error('Error fetching Pokemon image:', error);
  //   }
  // };

  const fetchPokeImage = async (num: number) => {
    const response = await import(`/src/assets/mockApiResponse${num}.json`);
    setPokeImage(response.sprites.other['official-artwork'].front_default);
    setPokeName(response.name);
  };

  useEffect(() => {
    fetchPokeImage(id);
  }, [id]);

  return pokeImage ? (
    <div>
      <img src={pokeImage} />
      <h1>{pokeName.charAt(0).toUpperCase() + pokeName.slice(1).toLowerCase()}</h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
