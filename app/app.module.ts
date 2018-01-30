import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'account', loadChildren: './account/account.module#AccountModule' },
      { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingModule' },
      { path: 'login', component: LoginComponent},
      {path : '**', redirectTo : 'account'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
