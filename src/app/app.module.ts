import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CreatePartieComponent } from './pages/create-partie/create-partie.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { SyntheseHeroComponent } from './components/synthese-hero/synthese-hero.component';
import { SyntheseMonstreComponent } from './components/synthese-monstre/synthese-monstre.component';
import { LancerPartieComponent } from './components/lancer-partie/lancer-partie.component';
import { CombatComponent } from './pages/combat/combat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreatePartieComponent,
    SyntheseComponent,
    SyntheseHeroComponent,
    SyntheseMonstreComponent,
    LancerPartieComponent,
    CombatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
