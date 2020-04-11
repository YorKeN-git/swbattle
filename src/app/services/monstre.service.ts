import { Injectable } from '@angular/core';
import { Monstre } from '../modeles/monstre';

@Injectable({
  providedIn: 'root'
})
export class MonstreService {

  monstreList: Monstre[] = [];
  monstre: Monstre;

  constructor() { }

  genererListMonstre(){
    //On génére le nombre de monstre a créer
    let nbMonstre = this.nbMonstreAGenerer();
    //On créer chaque monstre
    for (let index = 0; index < nbMonstre; index++) {
      // this.monstreList.push(this.genererMonstre());
      this.genererMonstre();
    }
    return this.monstreList;
  }

  nbMonstreAGenerer(){
    //Nous générons au minimum 3 monstres et max 10 monstre
    return Math.random() * (10 - 3) + 3;
  }

  /**
   *  si 0 < value < 22 => Génére un monstre normal 
   *  si 23 < value < 45 => Génére un monstre normal 
   *  si 46 < value < 68 => Génére un monstre normal 
   *  si 46 < value < 92 => Génére un monstre normal 
   *  si 93 < value < 100 => Génére un monstre épique (boss) 
   */
  genererMonstre(){
    let value = Math.random() * (100);
    if(value < 23){
      //J'invoque le monstre 1
      this.monstre = new Monstre();
      this.monstre.nom = this.genererNomMonstreM();
      this.monstre.arme = "Masse";
      this.monstre.hpMax = 700;
      this.monstre.def = 80;
      this.monstre.atk = 100;
      this.monstre.iconPath = "./assets/images/icon_monstre/monstre1.jpg";
      this.monstreList.push(this.monstre);
    }else if(value >= 23 && value < 46){
      //J'invoque le monstre 2
      this.monstre = new Monstre();
      this.monstre.nom = this.genererNomMonstreM();
      this.monstre.arme = "Masse";
      this.monstre.hpMax = 800;
      this.monstre.def = 100;
      this.monstre.atk = 150;
      this.monstre.iconPath = "./assets/images/icon_monstre/monstre2.jpg";
      this.monstreList.push(this.monstre);
    }else if(value >= 46 && value < 69){
      //J'invoque le monstre 3
      this.monstre = new Monstre();
      this.monstre.nom = this.genererNomMonstreM();
      this.monstre.arme = "Epee";
      this.monstre.hpMax = 800;
      this.monstre.def = 70;
      this.monstre.atk = 150;
      this.monstre.iconPath = "./assets/images/icon_monstre/monstre3.jpg";
      this.monstreList.push(this.monstre);
    }else if(value >= 69 && value < 93){
      //J'invoque le monstre 4
      this.monstre = new Monstre();
      this.monstre.nom = this.genererNomMonstreF();
      this.monstre.arme = "Dague";
      this.monstre.hpMax = 500;
      this.monstre.def = 50;
      this.monstre.atk = 200;
      this.monstre.iconPath = "./assets/images/icon_monstre/monstre4.jpg";
      this.monstreList.push(this.monstre);
    }else{
      //j'invoque un boss
      this.monstre = new Monstre();
      this.monstre.nom = this.genererNomMonstreM();
      this.monstre.arme = "Masse";
      this.monstre.hpMax = 1200;
      this.monstre.def = 200;
      this.monstre.atk = 300;
      this.monstre.iconPath = "./assets/images/icon_boss/boss.jpg";
      this.monstreList.push(this.monstre);
    }
  }

  genererNomMonstreM(){
    //WIP Generer nom M
    return "NomM"
  }

  genererNomMonstreF(){
    //WIP Generer nom F
    return "nomF"
  }
}
