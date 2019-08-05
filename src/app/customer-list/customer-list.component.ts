import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { CustomerOrderService } from '../customer-order.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


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
    public dialog: MatDialog,
    private router: ActivatedRoute) { }

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

  openEditCustomerDialog(): void {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width:'500px'
    });
    
    // dialogRef.afterOpened().subscribe((data => {
    //     this.customers.push(data);
    // }));
    this.router.data.subscribe(v => {
      this.customers = v;
      console.log(this.customers);
    })
  }
}
