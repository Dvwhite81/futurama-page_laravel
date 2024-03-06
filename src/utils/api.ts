export const CATEGORIES = [
  'characters',
  'cast',
  'episodes',
  'questions',
];

export const getData = async (category: string) => {
  const resp = await fetch(`https://api.sampleapis.com/futurama/${category}`);
  const json = await resp.json();
  return json;
};
