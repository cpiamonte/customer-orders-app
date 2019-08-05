import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {
  customers: any;
  id: number;
  name: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<EditCustomerDialogComponent>) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {

  }


}
