import { useState } from 'react';
import { Card } from './Card';

const pokeId = (): number => {
  return 151 + Math.floor(Math.random() * 100);
};

const generatePokeArray = (): number[] => {
  const pokeArray: number[] = [];

  while (pokeArray.length < 12) {
    const num = pokeId();
    if (pokeArray.includes(num) == false) {
      pokeArray.push(num);
    }
  }

  return pokeArray;
};

export const PlayArea: React.FC = () => {
  const [pokeArray, setPokeArray] = useState<number[]>(generatePokeArray());
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shufflePokeButtons = () => {
    const shuffled = shuffleArray([...pokeArray]);
    setPokeArray(shuffled);
  };

  const cardClicked = (id: number): void => {
    if (!clickedCards.includes(id)) {
      setCurrentScore((prevScore) => {
        const newScore = prevScore + 1;

        if (newScore > highScore) {
          setHighScore(newScore);
        }

        return newScore;
      });

      clickedCards.push(id);
      setClickedCards([...clickedCards]);
    } else {
      setCurrentScore(0);
      setClickedCards([]);
    }

    shufflePokeButtons();
  };

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <h2>Current score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
      </header>
      <div className="play-area">
        {pokeArray.map((pokemon) => {
          return <Card key={pokemon} id={pokemon} handleClick={() => cardClicked(pokemon)} />;
        })}
      </div>
    </>
  );
};
