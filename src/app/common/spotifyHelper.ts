import IUser from '../interfaces/IUser';

export const SpotifyTranslateUser = (user: any): IUser => {
  return {
    id: user.id,
    name: user.display_name,
    image: user.images.pop().url,
  };
};
