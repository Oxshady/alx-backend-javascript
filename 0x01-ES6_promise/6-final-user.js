import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then(
    (promises) => {
      const statusValue = [];
      promises.forEach((x) => {
        statusValue.push({
          status: x.status,
          value: x.value,
        });
	});
	return statusValue;
    },
  );
}
