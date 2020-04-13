import { Injectable } from '@angular/core';
import { MonstreService } from './monstre.service';
import { HeroServiceService } from './hero-service.service';
import { Partie } from '../modeles/partie';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  constructor(private heroService: HeroServiceService,
              private monstreService: MonstreService) { }

  commencerPartie(){
    return Math.floor(Math.random() * Math.floor(100));
  }

  getHeroList(){
    return this.heroService.listHero;
  }

  getMonstreList(){
    return this.monstreService.monstreList;
  }

  attaquer(partie: Partie, rand: number){
    if(rand <= 50){
      //les Héros attaquent en premier les monstres 
    }else{
      //les monstres attaquent en premier les héros
    }
  }
}
