import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then(
    (promises) => {
      const statusValue = [];
      promises.forEach((x) => {
        statusValue.push({
          status: x.status,
          value: x.status === 'fulfilled' ? x.value : String(x.reason),
        });
      });
      return statusValue;
    },
  );
}
console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((data)=>console.log(data)));
