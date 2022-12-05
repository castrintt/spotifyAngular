import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public description: string = '';
  @Input()
  public selectedItem: boolean = false;

  @Output()
  public emitter = new EventEmitter<string>();

  ngOnInit(): void {}

  public onClick(description: string): void {
    this.emitter.emit(description);
  }
}
