import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [CommonModule, HeroesRoutingModule, FormsModule, HttpClientModule, RouterModule],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {}
