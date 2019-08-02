import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  name: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<AddCustomerDialogComponent>) { }
 
  ngOnInit() {

  }

  onAddCustomer() {
    if (this.name && this.address) {
      this.dialogRef.close({
        name: this.name,
        address: this.address
      });
    }
  }

  
  onCancel(): void {
    this.dialogRef.close();
  }

}
