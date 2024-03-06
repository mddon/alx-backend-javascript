import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const prom1 = await uploadPhoto();
    const prom2 = await createUser();

    return ({ photo: photoResponse, user: userResponse});
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
export default asyncUploadUser;
