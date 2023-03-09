import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesreportComponent } from './pages/salesreport/salesreport.component';


const routes: Routes = [
  {path: 'salesreport/:id',component: SalesreportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
