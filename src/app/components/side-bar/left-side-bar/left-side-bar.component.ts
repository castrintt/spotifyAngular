import { Component, OnInit } from '@angular/core';
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
      selected: this.selectedItem(EButtons.Home),
    },
    {
      description: EButtons.Pesquisar,
      icon: faSearch,
      selected: this.selectedItem(EButtons.Pesquisar),
    },
    {
      description: EButtons.Artistas,
      icon: faGuitar,
      selected: this.selectedItem(EButtons.Artistas),
    },
  ];

  ngOnInit(): void {}

  public buttonClick(description: string): boolean {
    this.selectedMenu = description;
    return this.selectedMenu === description;
  }

  public selectedItem(description: string): boolean {
    if (this.selectedMenu === description) {
      return true;
    } else {
      return false;
    }
  }
}
