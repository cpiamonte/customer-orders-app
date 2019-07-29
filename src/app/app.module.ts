import { FormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerListComponent,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
