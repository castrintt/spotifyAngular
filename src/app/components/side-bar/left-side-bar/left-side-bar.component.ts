import { Component, OnInit } from '@angular/core';
import {
  faGuitar,
  faHome,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import IButton from 'src/app/interfaces/IButton';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  public selectedMenu: string = 'Home';

  public searchProperties: Array<IButton> = [
    {
      description: 'Home',
      icon: faHome,
      selected: this.selectedItem('Home'),
    },
    {
      description: 'Pesquisar',
      icon: faSearch,
      selected: this.selectedItem('Pesquisar'),
    },
    {
      description: 'Artistas',
      icon: faGuitar,
      selected: this.selectedItem('Artistas'),
    },
  ];

  ngOnInit(): void {}

  public buttonClick(description: string): void {
    this.selectedMenu = description;
  }

  public selectedItem(description: string): boolean {
    if (this.selectedMenu === description) {
      return true;
    } else {
      return false;
    }
  }
}
