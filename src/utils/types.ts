export interface Character {
  age: string;
  gender: string;
  homePlanet: string;
  id: number;
  images: {
    'head-shot': string;
    main: string;
  }
  name: {
    first: string;
    middle: string;
    last: string;
  }
  occupation: string;
  sayings: string[];
  species: string;
}

export interface CastMember {
  bio: {
    url: string;
  }
  name: string;
  id: number;
}

export interface TriviaQuestion {
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
  id: number;
}

export interface Episode {
  desc: string;
  number: string;
  originalAirDate: string;
  title: string;
  id: number;
}
