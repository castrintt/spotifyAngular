import IPlaylist from '../interfaces/IPlaylist';
import IUser from '../interfaces/IUser';

export const SpotifyTranslateUser = (user: any): IUser => {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop()?.url,
  };
};

export const SpotifyPlaylistTranslate = (
  playlist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist => {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url,
  };
};
