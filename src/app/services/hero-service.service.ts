import { Injectable } from '@angular/core';
import { Hero } from '../modeles/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  hero: Hero;
  listHero: Hero[];

  constructor() { }

  /**
   * 
   * @param listHero : notre liste de Héro
   */
  majListHero(listHero: Hero[]){
    this.listHero = listHero; 
    this.initialiserHero(this.listHero);
  }

  initialiserHero(listHero: Hero[]){
    for (let index = 0; index < listHero.length; index++) {
      switch (listHero[index].classe) {
        case 'guerrier':
          listHero[index].hpMax = 800;
          listHero[index].def = 200;
          listHero[index].atk = 100;
          listHero[index].pathIcon = "./assets/images/icon_classe/guerrier.jpg";
          break;
        case 'soigneur':
          listHero[index].hpMax = 600;
          listHero[index].def = 50;
          listHero[index].atk = 50;
          listHero[index].pathIcon = "./assets/images/icon_classe/priest.jpg";
          break;
        case 'assassin':
          listHero[index].hpMax = 600;
          listHero[index].def = 50;
          listHero[index].atk = 300;
          listHero[index].pathIcon = "./assets/images/icon_classe/assassin.jpg"
          break;

        case 'archer':
          listHero[index].hpMax = 700;
          listHero[index].def = 50;
          listHero[index].atk = 200;
          listHero[index].pathIcon = "./assets/images/icon_classe/archer.jpg"
          break;
    
        default:
          break;
      }
    }
  }


}
