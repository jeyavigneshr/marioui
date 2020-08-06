import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from "./analytics/analytics.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'analytics-component', component: AnalyticsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
