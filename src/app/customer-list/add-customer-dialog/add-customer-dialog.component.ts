import { CustomerListComponent } from './../customer-list.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  @Output() public customers: any;
  name: string;
  address: string;

  constructor(
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddCustomer() {
    this.customers.push({name: this.name, address: this.address});
    this.customers.emit({name: this.name, address: this.address});
  }

  ngOnInit() {
  }

}
