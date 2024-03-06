import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastMember, Character, Episode, TriviaQuestion } from '../utils/types';

import Cast from './Cast';
import Characters from './Characters';
import Episodes from './Episodes';
import TriviaPage from './Trivia';
import { getData } from '../utils/api';

const CategoryPage = () => {
  const [cast, setCast] = useState<CastMember[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);

  const { category } = useParams();

  useEffect(() => {
    const getAll = async () => {
      const jsonCast = await getData('cast');
      setCast(jsonCast);

      const jsonCharacters = await getData('characters');
      setCharacters(jsonCharacters);

      const jsonEpisodes = await getData('episodes');
      setEpisodes(jsonEpisodes);

      const jsonQuestions = await getData('questions');
      setQuestions(jsonQuestions);
    };

    getAll();
  }, []);

  const content =
    category === 'cast'
      ? <Cast cast={cast} />
      : category === 'characters'
        ? <Characters characters={characters} />
        : category === 'episodes'
          ? <Episodes episodes={episodes} />
          : <TriviaPage questions={questions} />;

  return (
    <div className='category-page page container'>
      <h2 className='pad-left'>Category: {category}</h2>
      {content}
    </div>
  );
};

export default CategoryPage;
