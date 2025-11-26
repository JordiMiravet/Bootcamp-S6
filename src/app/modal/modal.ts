import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
  inputs: ['currentHelpButton'],
  outputs: ['helpButton']
})

export class ModalComponent {
  currentHelpButton: 'pages' | 'languages' = 'pages';
  helpButton = new EventEmitter<'pages' | 'languages'>();

  helpButtonEmit() {
    this.helpButton.emit(this.currentHelpButton);
  }
}
