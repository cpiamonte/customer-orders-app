import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CustomerOrderService {

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get('assets/customer-orders.json');
  }
}
