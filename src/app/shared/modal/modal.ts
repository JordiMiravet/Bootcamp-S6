import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class ModalComponent {
  @Input() currentHelpButton: 'pages' | 'languages' = 'pages';
  @Output() helpButton = new EventEmitter<'pages' | 'languages'>();

  helpButtonEmit() {
    this.helpButton.emit(this.currentHelpButton);
  }
}
