import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactService } from '../contact.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})

export class ContactViewDialogComponent {
  public displayed: Boolean = false;

  constructor(public dialogRef: MdDialogRef<ContactListComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public contactService: ContactService,
    public snackBar: MdSnackBar,
    public dialog: MdDialog) { }

  openConfirmDialog(id: string): void {
    const dialogRef: MdDialogRef<ConfirmDialogComponent> = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to delete this contact?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmation: Response) => {
      if (confirmation) {
        this.delete(id).map((response: any) => response.json()).subscribe((response: any) => {
          if (response.ok === 1) {
            this.notify('Contact Deleted');
            this.dialog.getDialogById('contact-dialog').close();
          }
        });
      }
    });
  }

  displayForm(): Boolean {
    return this.displayed = true;
  }

  save(id: string, data: any): void {
    delete data._id;
    this.contactService.save(id, data).map((response: any) => response.json()).subscribe((response: any) => {
      if (response.ok === 1) {
        this.notify(`${data.name} updated`);
        this.close();
      }
    });
  }

  delete(id: string): Observable<any> {
    return this.contactService.delete(id);
  }

  notify(message: string): void {
    this.snackBar.open(message, 'OK', { duration: 4000 });
  }

  close(): void {
    this.dialogRef.close();
  }
}
