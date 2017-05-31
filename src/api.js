const FEED = [
  { id: 1, content: 'Hello' },
  { id: 2, content: 'World' },
];

export const getFeed = () => new Promise((res) => {
  setTimeout(() => res(FEED), 3000);
});
