import { CustomerOrderService } from './customer-order.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatDividerModule, MatPaginatorModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerDialogComponent } from './customer-list/add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from './customer-list/edit-customer-dialog/edit-customer-dialog.component';
import { CustomerFilterPipe } from './customer-list/customer-filter.pipe';
import { ViewOrdersDialogComponent } from './customer-list/view-orders-dialog/view-orders-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    CustomerFilterPipe,
    ViewOrdersDialogComponent,
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
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [CustomerOrderService],
  bootstrap: [AppComponent],
  entryComponents: [AddCustomerDialogComponent, EditCustomerDialogComponent, ViewOrdersDialogComponent]
})
export class AppModule { }
