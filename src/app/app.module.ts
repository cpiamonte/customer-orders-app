import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerListComponent,
    AddCustomerDialogComponent,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddCustomerDialogComponent]
})
export class AppModule { }
