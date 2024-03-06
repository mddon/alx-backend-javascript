import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Execute uploadPhoto and createUser concurrently
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    // Handle errors from uploadPhoto and createUser separately
    const photoError = error instanceof uploadPhoto.Error ? error : null;
    const userError = error instanceof createUser.Error ? error : null;

    return { photo: photoError, user: userError };
  }
}
