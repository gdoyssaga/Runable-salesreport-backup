import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventViewComponent } from './pages/event-view/event-view.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';
import { SellReportComponent } from './pages/sell-report/sell-report.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    CreateEventComponent,
    EventViewComponent,
    EventEditComponent,
    SellReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
