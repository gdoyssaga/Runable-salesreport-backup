import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventViewComponent } from './pages/event-view/event-view.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';

import {MatIconModule} from '@angular/material/icon';
import { SalesreportComponent } from './pages/salesreport/salesreport.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    CreateEventComponent,
    EventViewComponent,
    EventEditComponent,
    SalesreportComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
