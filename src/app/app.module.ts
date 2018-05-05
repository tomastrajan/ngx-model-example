import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxModelModule } from 'ngx-model';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
