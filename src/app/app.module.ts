import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
