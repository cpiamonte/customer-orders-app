import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(public dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, address: string }){ }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {
    if (this.data.name && this.data.address) {
      this.dialogRef.close({
        name: this.data.name,
        address: this.data.address
      });
    }
  }
}
