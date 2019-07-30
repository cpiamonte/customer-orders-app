import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';

export interface DialogData {
  cname: string;
  address: string;
  orders: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cname: string;
  address: string;
  orders: any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      data: {name: this.cname, address: this.address, orders: this.orders}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cname = result;
    })
  }

  ngOnInit() {
  }

}
