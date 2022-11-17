import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatsComponent} from "./views/stats/stats.component";
import {GeneratorComponent} from "./views/generator/generator.component";

const routes: Routes = [
  { path: '', component: GeneratorComponent },
  { path: 'stats', component: StatsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
