import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Component/Signup/signup/signup.component';
import { LoginComponent } from './Component/Login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ForgotpasswordComponent } from './Component/ForgetPassword/forgotpassword/forgotpassword.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './Component/dashboard/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword/resetpassword.component';
import { GetAllBooksComponent } from './Component/get-allbooks/get-all-books/get-all-books.component';
import { GetWishlistComponent } from './Component/GetWishlist/get-wishlist/get-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ResetpasswordComponent,
    GetAllBooksComponent,
    GetWishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FormFieldPrefixSuffixExample {
  hide = true;
}
