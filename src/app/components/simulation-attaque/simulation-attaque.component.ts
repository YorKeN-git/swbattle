import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-attaque',
  templateUrl: './simulation-attaque.component.html',
  styleUrls: ['./simulation-attaque.component.scss']
})
export class SimulationAttaqueComponent implements OnInit {

  //Boolean pour la création du Héro d'entrainement
  choixClasseFait: boolean = false;
  choixArmeFait: boolean = false;
  epee: boolean = false;
  masse: boolean = false;
  dague: boolean = false;
  arc: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  entrainementChoixClasse(choixClasse: string){
    //Affiche le choix de l'arme en fonction de la classe selectionnée
    this.choixClasseFait = true;
    switch (choixClasse) {
      case 'guerrier':
        this.epee = true;
        this.masse = true;
        this.dague = false;
        this.arc = false;
        break;
      case 'soigneur':
        this.epee = true;
        this.masse = true;
        this.dague = false;
        this.arc = false;
        break;
      case 'assassin':
        this.epee = true;
        this.masse = false;
        this.dague = true;
        this.arc = false;
        break;
      case 'archer':
        this.epee = false;
        this.masse = false;
        this.dague = false;
        this.arc = true;
        break;
      default:
        break;
    }
  }

  entrainementChoixArme(){
    this.choixArmeFait = true;
  }

}
