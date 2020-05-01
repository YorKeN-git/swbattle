import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService {

  constructor() { }

  creerEntrainement(classe: string, arme: string, monstre: string){
    switch (classe) {
      case 'guerrier':
        this.creerGuerrier();
        break;
      
      case 'soigneur':
        this.creerSoigneur();
        break;

      case 'assassin':
        this.creerAssassin();
        break;
      
      case 'archer':
        this.creerArcher();
        break;
        
      default:
        break;
    }
  }

  creerGuerrier(){

  }

  creerSoigneur(){

  }

  creerAssassin(){

  }

  creerArcher(){

  }
}
