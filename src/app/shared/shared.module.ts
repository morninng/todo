import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { KeysInObjectPipe } from './pipe/keys-in-object.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeysInObjectPipe
  ],
  exports:  [
    CommonModule,
    FormsModule,
    KeysInObjectPipe
  ]
})
export class SharedModule { }
