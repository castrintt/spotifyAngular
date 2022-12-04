import IPlaylist from '../interfaces/IPlaylist';
import IUser from '../interfaces/IUser';

export const SpotifyTranslateUser = (
  user: SpotifyApi.CurrentUsersProfileResponse
): IUser => {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop()?.url,
  };
};

export function SpotifyPlaylistTranslate(
  playlist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url,
  };
}
