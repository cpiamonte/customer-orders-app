import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './shared/customer.model';

@Injectable({providedIn: 'root'})
export class CustomerOrderService {
  customersChanged = new Subject<Customer[]>();
  private customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get('assets/customer-orders.json');
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.customersChanged.next(this.customers.slice());
  }
}
