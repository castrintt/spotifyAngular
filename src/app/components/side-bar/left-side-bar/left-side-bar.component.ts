import { Component, DoCheck, OnInit } from '@angular/core';
import {
  faGuitar,
  faHome,
  faMusic,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { EButtons } from 'src/app/Enums/EButtons';
import IButton from 'src/app/interfaces/IButton';
import IPlaylist from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  public selectedMenu: string = EButtons.Home;

  public searchProperties: Array<IButton> = [
    {
      description: EButtons.Home,
      icon: faHome,
      selected: true,
    },
    {
      description: EButtons.Pesquisar,
      icon: faSearch,
      selected: false,
    },
    {
      description: EButtons.Artistas,
      icon: faGuitar,
      selected: false,
    },
  ];
  public playlistProperties: Array<IButton> = [
    {
      description: 'Play 1',
      icon: faMusic,
      selected: false,
    },
    {
      description: 'Play 2',
      icon: faMusic,
      selected: false,
    },
    {
      description: 'Play 3',
      icon: faMusic,
      selected: false,
    },
    {
      description: 'Play 4',
      icon: faMusic,
      selected: false,
    },
    {
      description: 'Play 5',
      icon: faMusic,
      selected: false,
    },
  ];
  public userPlaylists: Array<IPlaylist> = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  public buttonClick(description: string): void {
    this.selectedMenu = description;
    this.resetListSelectedValues();
    this.selectedOptionsHandler(this.selectedMenu);
  }
  private resetRouteMenuSelectedOption(): void {
    const newArray: Array<IButton> = this.searchProperties.map(
      (values: IButton) => {
        return {
          ...values,
          selected: false,
        };
      }
    );
    this.searchProperties = newArray;
  }
  private resetPlaylistSelectedOption(): void {
    const newArray: Array<IButton> = this.playlistProperties.map(
      (values: IButton) => {
        return {
          ...values,
          selected: false,
        };
      }
    );
    this.playlistProperties = newArray;
  }
  private resetListSelectedValues(): void {
    this.resetRouteMenuSelectedOption();
    this.resetPlaylistSelectedOption();
  }

  private selectedOptionsHandler(description: string): void {
    this.changeTheRoutesMenuSelectedOptions(description);
    this.changeThePlaylistMenuSelectedOptions(description);
  }

  private changeTheRoutesMenuSelectedOptions(selectedMenuItem: string): void {
    const newSearchPropertiesArray: Array<IButton> = this.searchProperties.map(
      (values: IButton) => {
        if (values.description === selectedMenuItem) {
          return {
            ...values,
            selected: true,
          };
        }
        return values;
      }
    );
    this.searchProperties = newSearchPropertiesArray;
  }
  private changeThePlaylistMenuSelectedOptions(selectedPlaylist: string): void {
    const newPlaylistArray: Array<IButton> = this.playlistProperties.map(
      (values: IButton) => {
        if (values.description === selectedPlaylist) {
          return {
            ...values,
            selected: true,
          };
        }
        return values;
      }
    );
    this.playlistProperties = newPlaylistArray;
  }

  private getPlaylists = async () => {
    this.userPlaylists = await this.spotifyService.searchUserPlaylist();
    console.log(this.userPlaylists);
  };
}
