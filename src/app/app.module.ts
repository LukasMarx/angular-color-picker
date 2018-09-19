import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerModule } from './color-picker/color-picker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
