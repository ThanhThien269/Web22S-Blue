import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './components/top/top.component';
import {MatIconModule} from '@angular/material/icon';
import { ListItemComponent } from './components/list-item/list-item.component';
import { BodyComponent } from './components/body/body.component';
import { ItemComponent } from './components/item/item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CounterComponent } from './components/counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ListItemComponent,
    BodyComponent,
    ItemComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }