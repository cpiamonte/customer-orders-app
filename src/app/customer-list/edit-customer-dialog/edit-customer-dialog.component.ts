import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {
  customers: any;
  form = new FormGroup({
    name: new FormControl(this.data.name),
    address: new FormControl(this.data.address),
    id: new FormControl(this.data.id)
  });

  constructor(public dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, address: string, id: number }){ }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.value);
  };
}
