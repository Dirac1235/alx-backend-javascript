import { createUser, uploadPhoto } from './utils';
function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
  .then((values) => {
    console.log(values[1].body, values[0].firstName, values[0].lastName)
  })
}
handleProfileSignup();