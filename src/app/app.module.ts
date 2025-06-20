import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ← IMPORTANTE

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // ← IMPORTANTE para usar servicios HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
