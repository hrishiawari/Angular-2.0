import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { CarComponent } from './car/car.component';
import { DirectivesComponent } from './directives/directives.component';

import { SizerDirective } from './directives/sizer.directive';
import { EffectDirective } from './directives/effect.directive';
import { TableComponent } from './table/table.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

 // import { LocalRefsComponent } from './local-refs/local-refs.component';
 // import { DrectivesComponent } from './drectives/drectives.component';
 // import { MyAttrDirDirective } from './drectives/my-attr-dir.directive';
// import { NavBarDirective } from './drectives/nav-bar.directive';
 //import { NavBarCompComponent } from './drectives/nav-bar-comp.component';
 import { Ng2TableModule } from 'ng2-table/ng2-table';
import { RatingComponent } from './rating/rating.component';
import {RatingModule} from 'ng2-rating';
import{FormsModule}from '@angular/forms';
import { ServiceCompComponent } from './service-comp/service-comp.component';

 
 //import { ExtraTabComponent } from './drectives/extra-tab.component';
 //import {RatingModule} from 'ng2-rating'
@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    CarComponent,
    DirectivesComponent,
    
    SizerDirective,
    
    EffectDirective,
    
    TableComponent,
    
    RatingComponent,
    
    ServiceCompComponent,
      // Ng2SmartTableModule
  ],
  imports: [
    BrowserModule,
     Ng2TableModule,
     RatingModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
