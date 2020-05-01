import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrainementService } from 'src/app/services/entrainement.service';

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

  //FormGroup
  entrainementForm: FormGroup;
  errorForm: boolean = false;

  constructor(private fb: FormBuilder,
              private entrainementService: EntrainementService) { }

  ngOnInit() {
    this.entrainementForm = this.fb.group({
      classe: ['', Validators.required],
      arme: ['', Validators.required],
      monstre: ['', Validators.required]
    });
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

  creerEntrainement(){
    if(this.entrainementForm.invalid){
      //formulaire invalide, affiche un message d'erreur.
      this.errorForm = true; 
      return;
    }else{
      //Retire le message d'erreur. 
      this.errorForm = false; 
      //Récuperd les données du form 
      let classe = this.entrainementForm.get('classe').value;
      let arme = this.entrainementForm.get('arme').value;
      let monstre = this.entrainementForm.get('monstre').value;
      console.log(classe + ' ' + arme + ' ' + monstre);

      //Créer la partie d'entrainement 
    }
  }

}
