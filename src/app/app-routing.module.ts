import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesreportComponent } from './pages/salesreport/salesreport.component';
import { EventViewComponent } from './pages/event-view/event-view.component';


const routes: Routes = [
  {path: 'salesreport/:id',component: SalesreportComponent},
  {path: 'eventview', component: EventViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
