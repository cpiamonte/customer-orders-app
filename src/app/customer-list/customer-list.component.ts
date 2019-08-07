import { ViewOrdersDialogComponent } from './view-orders-dialog/view-orders-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, } from '@angular/core';

import { CustomerOrderService } from '../customer-order.service';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;
  name: string;
  address: string;
  id: number;
  p: number = 1;

  constructor(
    private customerOrderService: CustomerOrderService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.customerOrderService.getCustomer().subscribe(data => (this.customers = data));
  }

  openAddCustomerDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width:'500px',
    });

    dialogRef.afterClosed().subscribe((data => {
      if (data) {
        this.customers.push(data);
      } 
    }));
  }

  openEditCustomerDialog(customer: any): void {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width:'500px',
      data: {name: customer.name, address: customer.address}
    });
  }

  openViewOrdersDialog(customer: any): void {
    const dialogRef = this.dialog.open(ViewOrdersDialogComponent, {
      width:'500px',
      data: {name: customer.name, address: customer.address}
    });
  }
}
