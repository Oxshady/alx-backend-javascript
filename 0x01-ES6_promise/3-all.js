import { uploadPhoto, createUser } from 'utils.js';

Promise.all([uploadPhoto(), createUser()]).then((data) => {
  const [photo, user] = data;
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
});
