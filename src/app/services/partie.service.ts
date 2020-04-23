import { Injectable } from '@angular/core';
import { MonstreService } from './monstre.service';
import { HeroServiceService } from './hero-service.service';
import { Partie } from '../modeles/partie';
import { Monstre } from '../modeles/monstre';

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
      for (let index = 0; index < partie.heroList.length; index++) {
        let randomAtk = Math.floor(Math.random() * Math.floor(partie.monstreList.length));
        partie.monstreList[randomAtk].hp = partie.monstreList[randomAtk].hp - (partie.heroList[index].atk) + partie.monstreList[randomAtk].def ;
        let rapport = partie.heroList[index].nom + "attaque " + partie.monstreList[randomAtk].nom + " et lui inflige " + partie.heroList[index].atk + " de dégats"
        console.log(rapport);
      }
      for (let index = 0; index < partie.monstreList.length; index++) {
        let randomAtk = Math.floor(Math.random() * Math.floor(partie.heroList.length));
        partie.heroList[randomAtk].hp = partie.heroList[randomAtk].hp - (partie.monstreList[index].atk) + partie.heroList[randomAtk].def ;
        let rapport = partie.monstreList[index].nom + "attaque " + partie.heroList[randomAtk].nom + " et lui inflige " + partie.monstreList[index].atk + " de dégats"
        console.log(rapport);
      }
    }else{
      //les monstres attaquent en premier les héros
      for (let index = 0; index < partie.monstreList.length; index++) {
        let randomAtk = Math.floor(Math.random() * Math.floor(partie.heroList.length));
        partie.heroList[randomAtk].hp = partie.heroList[randomAtk].hp - (partie.monstreList[index].atk) + partie.heroList[randomAtk].def ;
        let rapport = partie.monstreList[index].nom + "attaque " + partie.heroList[randomAtk].nom + " et lui inflige " + partie.monstreList[index].atk + " de dégats"
        console.log(rapport);
      }
      for (let index = 0; index < partie.heroList.length; index++) {
        let randomAtk = Math.floor(Math.random() * Math.floor(partie.monstreList.length));
        partie.monstreList[randomAtk].hp = partie.monstreList[randomAtk].hp - (partie.heroList[index].atk) + partie.monstreList[randomAtk].def ;
        let rapport = partie.heroList[index].nom + "attaque " + partie.monstreList[randomAtk].nom + " et lui inflige " + partie.heroList[index].atk + " de dégats"
        console.log(rapport);
      }
    }
    return partie;
  }

  // verifierSiMonstreMort(monstreList: Monstre[]){
  //   for (let index = 0; index < monstreList.length; index++) {
  //     if(monstreList[index].hp <= 0 ){
  //       //Le monstres est mort 
  //     }
      
  //   }
  // }

  // verifierSiHeroMort(){

  // }
}
