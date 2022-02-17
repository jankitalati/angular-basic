import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { InlineComponent } from './inline/inline.component';
import { TemplateComponent } from './template/template.component';
import { BothComponent } from './both/both.component';
import { UserAuthModule } from './user-auth/user-auth.module';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    InlineComponent,
    TemplateComponent,
    BothComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
