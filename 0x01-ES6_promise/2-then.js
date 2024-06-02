export default function handleResponseFromAPI(promise) {
  const val = promise
  .then(()=> ({status: 200, body: 'success'}))
  .catch(() => new Error('The fake API is not working currently'))
  .finally(console.log('Got a response from the API'))

  return val
}
const promise = Promise.reject(true);
console.log(handleResponseFromAPI(promise));
