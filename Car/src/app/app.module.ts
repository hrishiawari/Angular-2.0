import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { CarComponent } from './car/car.component';
import { DirectivesComponent } from './directives/directives.component';

import { SizerDirective } from './directives/sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    CarComponent,
    DirectivesComponent,
    
    SizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
