import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-view-orders-dialog',
  templateUrl: './view-orders-dialog.component.html',
  styleUrls: ['./view-orders-dialog.component.css']
})
export class ViewOrdersDialogComponent implements OnInit {
  customers: any;
  id: number;
  name: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<ViewOrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, address: string }){ }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
