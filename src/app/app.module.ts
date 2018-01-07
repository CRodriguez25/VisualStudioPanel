import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelActionService } from './services/panel-action/panel-action.service';
import { PanelButtonComponent } from './components/panel-button/panel-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PanelActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
