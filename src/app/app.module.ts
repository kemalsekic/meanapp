import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms';
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
<<<<<<< HEAD
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatPaginatorModule } from '@angular/material/paginator';
=======
import { HttpClientModule } from "@angular/common/http";
=======
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
>>>>>>> Stashed changes
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< Updated upstream
import { PostListComponent } from './posts/post-list/post-list.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
=======
=======
=======
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    PostListComponent,
    LoginComponent,
    SignupComponent
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    PostListComponent
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
=======
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
  ],
=======
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
  ],
>>>>>>> Stashed changes
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
})
export class AppModule { }
