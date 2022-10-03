import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [{ path: 'list', component: ListComponent },
{ path: 'us', component: AboutUsComponent },
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent },
// { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
