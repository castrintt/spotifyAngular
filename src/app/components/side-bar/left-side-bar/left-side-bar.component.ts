import { Component, DoCheck, OnInit } from '@angular/core';
import { faGuitar, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { EButtons } from 'src/app/Enums/EButtons';
import IButton from 'src/app/interfaces/IButton';

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

  ngOnInit(): void {}

  public resetSelectedButton(): void {
    this.searchProperties = [
      {
        description: EButtons.Home,
        icon: faHome,
        selected: false,
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
  }
  public buttonClick(description: string): void {
    this.selectedMenu = description;
    this.resetSelectedButton();
    this.changeTheSelectedIcon(this.selectedMenu);
  }
  public changeTheSelectedIcon(selectedMenuItem: string): void {
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
}
