import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolicitudPComponent } from './solicitud-p/solicitud-p.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudPComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
