import { CustomerOrderService } from './customer-order.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatDividerModule, MatPaginatorModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerDialogComponent } from './customer-list/add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from './customer-list/edit-customer-dialog/edit-customer-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [CustomerOrderService],
  bootstrap: [AppComponent],
  entryComponents: [AddCustomerDialogComponent]
})
export class AppModule { }
