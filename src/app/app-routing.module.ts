import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatePartieComponent } from './pages/create-partie/create-partie.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { CombatComponent } from './pages/combat/combat.component';
import { ReleaseNoteComponent } from './pages/release-note/release-note.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SimulateurComponent } from './pages/simulateur/simulateur.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'new-Partie', component: CreatePartieComponent},
  {path: 'synthese', component: SyntheseComponent},
  {path: 'combat', component: CombatComponent},
  {path: 'release-Note', component: ReleaseNoteComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'simulateur', component: SimulateurComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
