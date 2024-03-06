import { TriviaQuestion } from '../utils/types';

interface TriviaPageProps {
  questions: TriviaQuestion[];
}

const TriviaPage = ({ questions }: TriviaPageProps) => {
  return (
    <div className="page trivia-page">
      {questions.map((q) =>
        <p key={q.id}>{q.question}</p>
      )}
    </div>
  );
};

export default TriviaPage;
