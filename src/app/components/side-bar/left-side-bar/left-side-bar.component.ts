import { Component, OnInit } from '@angular/core';
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
  public musicICon: any = faMusic;
  public userPlaylists: Array<IButton> = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
    console.log(this.userPlaylists);
  }

  public selectMenu(description: string): void {
    this.selectedMenu = description;
    this.changeTheRoutesMenuSelectedOptions(this.selectedMenu);
  }
  private changeTheRoutesMenuSelectedOptions(selectedMenuItem: string): void {
    const newSearchPropertiesArray: Array<IButton> = this.searchProperties.map(
      (values: IButton) => {
        if (values.description === selectedMenuItem) {
          return {
            ...values,
            selected: true,
          };
        } else if (values.description !== selectedMenuItem) {
          return {
            ...values,
            selected: false,
          };
        }
        return values;
      }
    );
    this.searchProperties = newSearchPropertiesArray;
  }
  async getPlaylists() {
    this.userPlaylists = this.convertPlaylistArrayToIButtonsInterface(
      await this.spotifyService.searchUserPlaylist()
    );
  }
  public selectPlaylist(description: string) {
    const newArray: IButton[] = this.userPlaylists.map((values: IButton) => {
      if (description === values.description) {
        return {
          ...values,
          selected: true,
        };
      } else if (description !== values.description) {
        return {
          ...values,
          selected: false,
        };
      }
      return values;
    });
    this.userPlaylists = newArray;
  }
  public convertPlaylistArrayToIButtonsInterface = (
    playlist: IPlaylist[]
  ): IButton[] => {
    const convertedArray = playlist.map((values: IPlaylist) => {
      return {
        description: values.name,
        selected: false,
      };
    });
    return convertedArray;
  };
}
