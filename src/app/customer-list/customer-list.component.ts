import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { CustomerOrderService } from '../customer-order.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customersChanged = new Subject<any>();
  customers: any;
  name: string;
  address: string;

  constructor(private customerOrderService: CustomerOrderService,
    public dialog: MatDialog) { }

  ngOnInit() {
    // this.customersChanged.subscribe((customers: any[]) => {this.customers = customers});
    this.customerOrderService.getCustomer().subscribe(data => (this.customers = data));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width:'500px'
    });

    
  }

  addCustomer() {
    this.customers.push(this.customers);
    this.customersChanged.next(this.customers);
  }

}