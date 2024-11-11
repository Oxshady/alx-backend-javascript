import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser('shadi', 'mahmoud');
    const photo = await uploadPhoto('as');
    return {
      photo: photo || null,
      user: user || null,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
