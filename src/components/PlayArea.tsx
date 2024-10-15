import { Card } from './Card';

const pokeId = (): number => {
  // return 151 + Math.floor(Math.random() * 100);
  return Math.floor(1 + Math.random() * 12);
};

const generatePokeArray = (): number[] => {
  const pokeArray: number[] = [];
  // for (let i = 0; i < 12; i++) {
  //   pokeArray.push(pokeId());
  // }

  while (pokeArray.length < 12) {
    const num = pokeId();
    if (pokeArray.includes(num) == false) {
      pokeArray.push(num);
    }
  }

  return pokeArray;
};

export const PlayArea = () => {
  return (
    <>
      {generatePokeArray().map((pokemon) => {
        return <Card key={pokemon} id={pokemon} handleClick={() => console.log('bazinga')} />;
      })}
    </>
  );
};
