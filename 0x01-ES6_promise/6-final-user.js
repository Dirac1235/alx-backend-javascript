import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((result) => result.map((data) => ({
      status: data.status,
      value: data.status === 'fulfilled' ? data.value : String(data.reason),
    })));
}
