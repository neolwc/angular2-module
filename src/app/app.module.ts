import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';
import { UserService } from './user.service';

import { ContactModule } from './contact/contact.module';

@NgModule({
  imports:      [ BrowserModule, ContactModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }