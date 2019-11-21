import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducers } from './state/reducers';
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products/products.component';
import { AppService } from './app.service';
import { ItemsEffects } from './state/effects/items.effect'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ItemsEffects]),

    StoreDevtoolsModule.instrument({}),


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
