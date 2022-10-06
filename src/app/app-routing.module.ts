import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  {path: 'header',component:HeaderComponent},
  {path: 'home',component:HomeComponent},
  {path: 'abouts',component:AboutsComponent},
  {path: 'contacts',component:ContactsComponent},
  {path: 'career',component:CareerComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
