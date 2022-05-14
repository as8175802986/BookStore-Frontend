import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Component/ForgetPassword/forgotpassword/forgotpassword.component';
import { GetAllBooksComponent } from './Component/get-allbooks/get-all-books/get-all-books.component';
import { GetWishlistComponent } from './Component/GetWishlist/get-wishlist/get-wishlist.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword/resetpassword.component';
import { SignupComponent } from './Component/Signup/signup/signup.component';

const routes: Routes = [{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'dashboard',component:DashboardComponent},
{path:'resetpassword',component:ResetpasswordComponent},
{path:'getallbooks',component:GetAllBooksComponent},
{path:'getwishlist',component:GetWishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
