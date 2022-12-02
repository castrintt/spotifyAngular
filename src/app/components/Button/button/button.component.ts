import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import IButton from 'src/app/interfaces/IButton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public searchProperties: IButton = {
    description: '',
    icon: null,
    selected: false,
  };

  @Output()
  public click = new EventEmitter<string>();

  ngOnInit(): void {}

  public onClick(description: string): void {
    this.click.emit(description);
  }
}
