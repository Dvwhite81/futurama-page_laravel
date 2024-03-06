import { useParams } from 'react-router-dom';
import { CastMember, Character, Episode, TriviaQuestion } from '../utils/types';

import Cast from './Cast';
import Characters from './Characters';
import Episodes from './Episodes';
import TriviaPage from './Trivia';

interface CategoryPageProps {
  cast: CastMember[];
  characters: Character[];
  episodes: Episode[];
  questions: TriviaQuestion[];
}

const CategoryPage = ({ cast, characters, episodes, questions }: CategoryPageProps) => {
  const { category } = useParams();

  const content =
    category === 'cast' ? (
      <Cast cast={cast} />
    ) : category === 'characters' ? (
      <Characters characters={characters} />
    ) : category === 'episodes' ? (
      <Episodes episodes={episodes} />
    ) : (
      <TriviaPage questions={questions} />
    );

  return (
    <div className='category-page page container'>
      <h1 className='category-heading'>{category}</h1>
      {content}
    </div>
  );
};

export default CategoryPage;
