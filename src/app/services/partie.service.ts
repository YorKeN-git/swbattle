import { Injectable } from '@angular/core';
import { MonstreService } from './monstre.service';
import { HeroServiceService } from './hero-service.service';

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
}
