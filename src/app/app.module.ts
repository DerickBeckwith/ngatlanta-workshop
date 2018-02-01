import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PathNotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
