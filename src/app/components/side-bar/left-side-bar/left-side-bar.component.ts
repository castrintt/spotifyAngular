import { Component, DoCheck, OnInit } from '@angular/core';
import {
  faGuitar,
  faHome,
  faMusic,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { EButtons } from 'src/app/Enums/EButtons';
import IPlaylist from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

type TMenuItems = {
  description: string;
  icon: any;
};
type TDescription = { description: string };

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  public selectedMenu: string = EButtons.Home;
  public playlistIcon: any = faMusic;
  public userPlaylists: Array<TDescription> = [];
  public searchProperties: Array<TMenuItems> = [
    {
      description: EButtons.Home,
      icon: faHome,
    },
    {
      description: EButtons.Pesquisar,
      icon: faSearch,
    },
    {
      description: EButtons.Artistas,
      icon: faGuitar,
    },
  ];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  public selectMenu(description: string): void {
    this.selectedMenu = description;
  }
  async getPlaylists() {
    this.userPlaylists = this.convertPlaylistToArrayOfDescriptions(
      await this.spotifyService.searchUserPlaylist()
    );
  }
  public convertPlaylistToArrayOfDescriptions = (
    playlist: IPlaylist[]
  ): Array<TDescription> => {
    const convertedArray = playlist.map((values: IPlaylist) => {
      return { description: values.name };
    });
    return convertedArray;
  };
}
