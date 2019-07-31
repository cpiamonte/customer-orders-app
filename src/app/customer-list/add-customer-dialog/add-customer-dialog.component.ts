import { CustomerOrderService } from './../../customer-order.service';
import { Customer } from './../../shared/customer.model';
import { DialogData } from '../../header/header.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('addressInput', { static: false }) addressInputRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>,
    private customerOrderService: CustomerOrderService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddCustomer() {
    const custName = this.nameInputRef.nativeElement.value;
    const custAddress = this.addressInputRef.nativeElement.value;
    const newCustomer = new Customer(custName, custAddress);
    this.customerOrderService.addCustomer(newCustomer);
  }

  ngOnInit() {
  }

}
