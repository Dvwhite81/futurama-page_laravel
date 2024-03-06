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
