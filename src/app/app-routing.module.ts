import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { MainNavigationComponent } from './navigations/main-navigation/main-navigation.component';
import { AdminNavigationComponent } from './navigations/admin-navigation/admin-navigation.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  { path: '', children:[
    { path: '',  component: HomeComponent },
    { path: 'offers', component: OffersComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'list-books', component: ListBooksComponent},
    { path: 'book/:id', component: DetailsBookComponent}
  ], component: MainNavigationComponent 
  },
  {path:'admin', children:[
    { path: '', component: AdminComponent},
    
  ], component: AdminNavigationComponent

  },
  { path: '**', component: Page404Component}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
