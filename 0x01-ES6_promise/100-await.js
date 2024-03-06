import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoR = await uploadPhoto();
    const userR = await createUser();

    return ({ photo: photoR, user: userR });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}