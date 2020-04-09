import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatePartieComponent } from './pages/create-partie/create-partie.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'new-Partie', component: CreatePartieComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
