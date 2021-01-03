import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdTableModule, MdButtonModule, MdDialogModule, MdFormFieldModule, MdInputModule, MdSnackBarModule,
  MdIconModule, MdGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewDialogComponent } from './contact-view/contact-view.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactViewDialogComponent,
    ConfirmDialogComponent,
    ContactAddComponent
  ],
  entryComponents: [
    ContactViewDialogComponent,
    ConfirmDialogComponent,
    ContactAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdButtonModule,
    MdDialogModule,
    MdFormFieldModule,
    MdInputModule,
    MdGridListModule,
    MdIconModule,
    MdSnackBarModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
