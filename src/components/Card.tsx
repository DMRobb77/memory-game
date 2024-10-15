import { PokeImage } from './PokeImage';

interface CardProps {
  id: number;
  handleClick: () => void;
}

export const Card: React.FC<CardProps> = ({ id, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <PokeImage id={id} />
    </button>
  );
};
