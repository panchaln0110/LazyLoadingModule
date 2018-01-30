import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index/index.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : '', component : IndexComponent},
      { path : 'home', component : HomeComponent}
    ])
  ],
  declarations: [IndexComponent, HomeComponent, HeaderComponent]
})
export class MarketingModule { }
