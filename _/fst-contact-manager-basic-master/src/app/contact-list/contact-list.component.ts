import { Component, Inject, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MdTable, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ContactViewDialogComponent } from '../contact-view/contact-view.component';
import { ContactAddComponent } from '../contact-add/contact-add.component';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  displayedColumns: string[] = ['name', 'phone', 'email', 'view'];
  dataSource: DataSource<any> = new ContactDataSource(this.contactService);

  constructor(private contactService: ContactService, public dialog: MdDialog) { }

  openDialog(id: string): void {
    this.contactService.view(id).map((response: Response) => response.json()).subscribe((response: Promise<Response>) => {
      const dialogRef: MdDialogRef<ContactViewDialogComponent> = this.dialog.open(ContactViewDialogComponent, {
        id: 'contact-dialog',
        width: '450px',
        data: response
      });
      dialogRef.afterClosed().subscribe(() => {
        this.dataSource = new ContactDataSource(this.contactService);
      });
    });
  }

  openAddDialog(): void {
    const dialogRef: MdDialogRef<ContactAddComponent> = this.dialog.open(ContactAddComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource = new ContactDataSource(this.contactService);
    });
  }
}

export class ContactDataSource extends DataSource<any> {
  constructor(private contactService: ContactService) {
    super();
  }
  connect(): Observable<any> {
    return this.contactService.list()
      .map((response: any) => response.json())
      .catch((error: Error) => Observable.throw(error));
  }

  disconnect() {}
}
