import { Component, OnInit } from '@angular/core';
import { PartieService } from 'src/app/services/partie.service';
import { Hero } from 'src/app/modeles/hero';
import { Monstre } from 'src/app/modeles/monstre';

@Component({
  selector: 'app-lancer-partie',
  templateUrl: './lancer-partie.component.html',
  styleUrls: ['./lancer-partie.component.scss']
})
export class LancerPartieComponent implements OnInit {

  //Boolean pour le message rand 100
  herosCommencent: boolean = false;
  monstresCommencent: boolean = false;

  //boolean pour désactiver mon bouton après avoir lancer le rand 100
  submitRand: boolean = false;
  rand: number;

  //Ma liste de héro
  herosList: Hero[];

  //Ma liste de monstre
  monstresList: Monstre[];

  nbManche: number = 1;
  rapportCombat: string[] = ["Je suis dezopfkpofkpeorkf"];

  constructor(private partieService: PartieService) { }

  ngOnInit() {
    this.herosList = this.partieService.getHeroList();
    console.log(this.herosList);
    this.monstresList = this.partieService.getMonstreList();
    console.log( this.monstresList);
  }

  lancerCombat(){
    this.rand = this.partieService.commencerPartie();
    if(this.rand <= 50){
      //Les héros commencent
      this.herosCommencent = true;
      this.monstresCommencent = false; 
      this.submitRand = true;
    }else{
      //Les monstres commencent
      this.monstresCommencent = true; 
      this.herosCommencent = false;
      this.submitRand = true;
    }
  }

  attaquer(){
    this.rapportCombat.push("---- Début de la manche "+ this.nbManche + " ----");
    this.nbManche++;
    console.log(this.rapportCombat);
  }
}
