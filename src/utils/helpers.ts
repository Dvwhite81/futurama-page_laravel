import { Character, Episode, TriviaQuestion } from './types';

export const CATEGORIES = [
  'characters',
  'cast',
  'episodes',
  'trivia',
];

export const getData = async (category: string) => {
  if (category === 'trivia') {
    category = 'questions';
  }
  const resp = await fetch(`https://api.sampleapis.com/futurama/${category}`);
  const json = await resp.json();
  return json;
};

export const getCharactersByCast = (actorId: number) => {
  let voiced;

  switch (actorId) {
    case 1: {
      voiced = [
        'Philip Fry',
        'Hubert Farnsworth',
        'John Zoidberg',
        'Zapp Brannigan',
      ];
      break;
    }

    case 2: {
      voiced = [
        'Turanga Leela',
        'Cloberella',
        'Lee Lemon'
      ];
      break;
    }

    case 3: {
      voiced = [
        'Bender Rodriguez',
        'Mr. Panucci',
        'Barbados Slim',
        'Robot Santa',
      ];
      break;
    }

    case 4: {
      voiced = [
        'Mom',
        'Mrs. Fry',
        'Hattie McDoogal',
      ];
      break;
    }

    case 5: {
      voiced = [
        'Hermes Conrad',
        'Reverend Preacherbot',
        'Barack Obama'
      ];
      break;
    }

    case 6: {
      voiced = [
        'Amy Wong',
        'Inez Wong',
        'Jrr'
      ];
      break;
    }

    case 7: {
      voiced = [
        'Kif Kroker',
        'Lrr',
        'Calculon',
      ];
      break;
    }

    case 8: {
      voiced = [
        'Scruffy Scruffington',
        'Turanga Morris',
        'Mayor Poopenmeyer',
      ];
      break;
    }

    case 9: {
      voiced = ['Cubert Farnsworth'];
      break;
    }

    case 10: {
      voiced = [
        'Nibbler',
      ];
      break;
    }

    case 11: {
      voiced = ['LaBarbara Conrad'];
      break;
    }

    case 12: {
      voiced = ['Yancy Fry'];
      break;
    }

    case 13: {
      voiced = ['Robot Devil'];
      break;
    }

    case 14: {
      voiced = ['Himself'];
      break;
    }

    case 15: {
      voiced = ['Waterfall Family'];
      break;
    }
  }

  return voiced;
};

export const getActorImage = (actorId: number) => {
  let imgSrc;

  switch (actorId) {
    case 1: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Billy_West_%2852966807069%29.jpg/800px-Billy_West_%2852966807069%29.jpg';
      break;
    }

    case 2: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Katey_Sagal_Comic-Con_2011.jpg/330px-Katey_Sagal_Comic-Con_2011.jpg';
      break;
    }

    case 3: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/John_DiMaggio_%2852112905894%29_%28cropped%29.jpg/330px-John_DiMaggio_%2852112905894%29_%28cropped%29.jpg';
      break;
    }

    case 4: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tress_MacNeille.png/330px-Tress_MacNeille.png';
      break;
    }

    case 5: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Phil_LaMarr_%2852964779811%29.jpg/330px-Phil_LaMarr_%2852964779811%29.jpg';
      break;
    }

    case 6: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lauren_Tom_Photo_Op_Animate%21_Columbus_2023.jpg/330px-Lauren_Tom_Photo_Op_Animate%21_Columbus_2023.jpg';
      break;
    }

    case 7: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Maurice_LaMarche_by_Gage_Skidmore_3.jpg/330px-Maurice_LaMarche_by_Gage_Skidmore_3.jpg';
      break;
    }

    case 8: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/en/6/68/David_Herman_2018.jpeg';
      break;
    }

    case 9: {
      imgSrc =
        'data:image/webp;base64,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p6vsV9Cm0YAAAEVYSUYoAQAARXhpZgAASUkqAAgAAAADAA4BAgDfAAAAMgAAAJiCAgARAAAAEQEAABIBAwABAAAAAQAAAAAAAABORVcgWU9SSyAtIEZFQlJVQVJZIDU6ICAgQWN0cmVzcyBLYXRoIFNvdWNpZSAodm9pY2Ugb2YgS2FuZ2EpIHBvc2VzIGZvciBhIHBob3RvIGJlZm9yZSB0aGUgcHJlbWllcmUgb2YgIlBvb2gncyBIZWZmYWx1bXAgQWR2ZW50dXJlIiBhdCBMb2V3J3MgdGhlYXRlciBGZWJydWFyeSA1LCAyMDA1IGluIE5ldyBZb3JrIENpdHkuICAoUGhvdG8gYnkgRmVybmFuZG8gTGVvbi9HZXR0eSBJbWFnZXMpMjAwNSBHZXR0eSBJbWFnZXNYTVAgBwYAAGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMDUgR2V0dHkgSW1hZ2VzIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSI1MjEzOTc5OSIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5GZXJuYW5kbyBMZW9uPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5ORVcgWU9SSyAtIEZFQlJVQVJZIDU6ICAgQWN0cmVzcyBLYXRoIFNvdWNpZSAodm9pY2Ugb2YgS2FuZ2EpIHBvc2VzIGZvciBhIHBob3RvIGJlZm9yZSB0aGUgcHJlbWllcmUgb2YgJnF1b3Q7UG9vaCZhcG9zO3MgSGVmZmFsdW1wIEFkdmVudHVyZSZxdW90OyBhdCBMb2V3JmFwb3M7cyB0aGVhdGVyIEZlYnJ1YXJ5IDUsIDIwMDUgaW4gTmV3IFlvcmsgQ2l0eS4gIChQaG90byBieSBGZXJuYW5kbyBMZW9uL0dldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC81MjEzOTc5OT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/PgoA';
      break;
    }

    case 10: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Frank_Welker_Photo_Op_GalaxyCon_Raleigh_2023.jpg/330px-Frank_Welker_Photo_Op_GalaxyCon_Raleigh_2023.jpg';
      break;
    }

    case 11: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dawnn_Lewis_in_2012.jpg/330px-Dawnn_Lewis_in_2012.jpg';
      break;
    }

    case 12: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TomKenny.jpg/330px-TomKenny.jpg';
      break;
    }

    case 13: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/7/74/Dan_Castellaneta_cropped.jpg';
      break;
    }

    case 14: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/George_Takei_Photo_Op_GalaxyCon_Minneapolis_2019.jpg/330px-George_Takei_Photo_Op_GalaxyCon_Minneapolis_2019.jpg';
      break;
    }

    case 15: {
      imgSrc =
        'https://upload.wikimedia.org/wikipedia/commons/9/95/Phil_Hendrie.jpg';
      break;
    }
  }
  return imgSrc;
};

export const isACharacter = (name: string, characters: Character[]) => {
  return characters.map((c) => `${c.name.first} ${c.name.last}`).includes(name);
};

export const getCharacterId = (name: string, characters: Character[]) => {
  const existingChar = characters.find((c) => `${c.name.first} ${c.name.last}` === name);

  return existingChar?.id;
};

export const getSeasonEpisode = (episode: Episode) => {
  const { number } = episode;
  const [season, ep] = number.split(' - ');
  return [season, ep];
};

export const getRandomQuestion = (questions: TriviaQuestion[]): TriviaQuestion => {
  const random = Math.floor(Math.random() * questions.length);
  const q = questions[random];

  if (q.id < 29) {
    return q;
  }

  return getRandomQuestion(questions);
};
