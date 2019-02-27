import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolicitudPComponent } from './solicitud-p/solicitud-p.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ControlCheComponent } from './control-che/control-che.component';
import { AnalisispreComponent } from './analisispre/analisispre.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudPComponent,
    EjemploComponent,
    ControlCheComponent,
    AnalisispreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
