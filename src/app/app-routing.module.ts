import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {RoleGuardService} from './guards/role-guard.service';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', component: DefaultPageComponent},
  {path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'}}
];
@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
