import { SyntheticEvent, useState } from 'react';
import { TriviaQuestion } from '../utils/types';
import { getRandomQuestion } from '../utils/helpers';

interface TriviaPageProps {
  questions: TriviaQuestion[];
}

const TriviaPage = ({ questions }: TriviaPageProps) => {
  console.log('questions:', questions);
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion>(() => getRandomQuestion(questions));
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [message, setMessage] = useState('');

  const { correctAnswer, possibleAnswers, question } = currentQuestion;

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('e:', e);
    if (!currentAnswer) return;

    if (currentAnswer === correctAnswer || Number(currentAnswer) === Number(correctAnswer)) {
      setMessage('Correct!');
      setAnswerVisible(true);
    } else {
      setMessage(`No, the answer was "${correctAnswer}"`);
      setAnswerVisible(true);
    }

    setTimeout(() => {
      setMessage('');
      setAnswerVisible(false);
      setCurrentQuestion(getRandomQuestion(questions));
    }, 2000);
  };

  return (
    <div className='page trivia-page'>
      <div className='card trivia-card'>
        <p>{question}</p>
        <form className='trivia-answers'>
          <fieldset>
            {possibleAnswers.map((p) => (
              <label key={p} htmlFor={p}>
                <input
                  type='radio'
                  id={p}
                  name={p}
                  value={p}
                  checked={p === currentAnswer}
                  onChange={() => setCurrentAnswer(p)}
                />
                {p}
              </label>
            ))}
          </fieldset>
          <div className='trivia-message'>
            {answerVisible ? (
              <p>{message}</p>
            ) : (
              <button
                type='submit'
                className='btn trivia-submit'
                onClick={handleClick}
              >
                Answer
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TriviaPage;
