import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';
import { AnimationtComponent } from './animationt/animationt.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationdemoComponent,
    AnimationtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }