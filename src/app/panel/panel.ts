import { Component, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { ModalComponent } from "../shared/modal/modal";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.html',
  styleUrls: ['./panel.css'],
  inputs: ['pages', 'languages'],
  outputs: ['valuesChanged'],
})

export class PanelComponent {

  pages: number = 1;
  languages: number = 1; 
  valuesChanged = new EventEmitter<{pages: number, languages: number}>()
  helpButton : 'pages' | 'languages' = 'pages';

  panelForm! : FormGroup;

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

  emitHelpButton(button: 'pages' | 'languages'){
    this.helpButton = button;
  }
}
