import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers } from './state/reducers';
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,

    StoreModule.forRoot(reducers),

    StoreDevtoolsModule.instrument({}),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
