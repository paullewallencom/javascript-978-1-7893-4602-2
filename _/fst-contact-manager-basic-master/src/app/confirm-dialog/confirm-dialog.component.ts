import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
    constructor(
      public dialogRef: MdDialogRef<ConfirmDialogComponent>,
      @Inject(MD_DIALOG_DATA) public data: any) { }
}
