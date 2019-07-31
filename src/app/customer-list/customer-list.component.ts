import { Customer } from './../shared/customer.model';
import { CustomerOrderService } from '../customer-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;

  constructor(private customerOrderService: CustomerOrderService) { }

  ngOnInit() {
    this.customerOrderService.getCustomer().subscribe(data => (this.customers = data));
    this.customerOrderService.customersChanged.subscribe((customers: Customer[]) => {this.customers = customers});
  }

}
