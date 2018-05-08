import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user-new', component: UserNewComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'user-edit/:id', component: UserEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
