export default function getResponseFromAPI() {
  const promise1 = new Promise((resolve) => {
    resolve('This is promise');
  });

  return promise1;
}
