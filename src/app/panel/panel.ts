import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { ModalComponent } from "../shared/modal/modal";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.html',
  styleUrls: ['./panel.css'],
})

export class PanelComponent {

  @Input() pages: number = 1;
  @Input() languages: number = 1; 
  @Output() valuesChanged = new EventEmitter<{pages: number, languages: number}>

  panelForm : FormGroup;

  constructor(){
    this.panelForm = new FormGroup({
      pages : new FormControl(this.pages),
      languages : new FormControl(this.languages)
    })
  }
  
  updateValues(field: 'pages' | 'languages', change: number){
    const element = this.panelForm.get(field)
    if(element){
      let newValue = element.value + change;
      if(newValue < 1 || isNaN(newValue))  newValue = 1;

      element.setValue(newValue);
      this.emitValues();
    }
  }

  emitValues(){
    this.valuesChanged.emit({ 
      pages: this.panelForm.get('pages')?.value,
      languages: this.panelForm.get('languages')?.value
    });
  }

  helpButton : 'pages' | 'languages' = 'pages';

  emitHelpButton(button: 'pages' | 'languages'){
    this.helpButton = button;
  }
}
