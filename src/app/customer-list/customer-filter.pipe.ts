import { Pipe, PipeTransform } from '@angular/core';
import { CustomerListComponent } from './customer-list.component';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: CustomerListComponent[], filter: string): CustomerListComponent[] {
    if (!customers || !filter) {
      return customers;
    }

    return customers.filter(customer => customer.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
