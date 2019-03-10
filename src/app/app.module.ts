import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

// Modules
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component'
import { ProductListComponent } from './components/product-list/product-list.component'

// Services
import { ProductDataService } from './services/data/product-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    InMemoryWebApiModule.forRoot(ProductDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
