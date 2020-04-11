import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/modeles/hero';
import { Router } from '@angular/router';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-create-partie',
  templateUrl: './create-partie.component.html',
  styleUrls: ['./create-partie.component.scss']
})
export class CreatePartieComponent implements OnInit {

  //Boolean pour afficher le choix des armes du héro 
  guerrierChecked: boolean = false;
  soigneurChecked: boolean = false;
  assassinChecked: boolean = false;
  archerChecked: boolean = false;

  //Boolean pour afficher le message succes / error du form 
  formSuccess: boolean = false;
  formError: boolean = false;
  formInfo: boolean = false;

  //Boolean pour le message error 0 Héro créer
  pasDeHeroCreer: boolean = false;

  //Mon formgroup
  createHeroForm: FormGroup;

  //Ma liste de Hero (pour le moment de type any)
  hero : Hero; 
  listHero : Hero[] = [];

  constructor(private fb: FormBuilder,
              private route: Router,
              private heroService: HeroServiceService) { }

  ngOnInit() {

    this.createHeroForm = this.fb.group({
      nomHero: ['', Validators.required],
      classeHero: ['', Validators.required],
      armeHero: ['', Validators.required]
    });
  }

  afficherArme(value :string){
    switch (value) {
      case 'guerrier':
        this.guerrierChecked = true;
        this.assassinChecked = false;
        this.soigneurChecked = false;
        this.archerChecked = false;
        break;
      case 'archer':
        this.guerrierChecked = false;
        this.assassinChecked = false;
        this.soigneurChecked = false;
        this.archerChecked = true;
          break;
      case 'soigneur':
        this.guerrierChecked = false;
        this.assassinChecked = false;
        this.soigneurChecked = true;
        this.archerChecked = false;
        break;
      case 'assassin':
        this.guerrierChecked = false;
        this.assassinChecked = true;
        this.soigneurChecked = false;
        this.archerChecked = false;
        break;
      default:
        break;
    }
  }

  creerHero(){

    if(this.listHero.length === 5){
      //Nous limitons la création de héros a 5 
      this.formInfo = true; 
      this.formError = false;
      this.formSuccess = false;
      return;
    }
    if(this.createHeroForm.valid){
      //afficher le message success
      this.formError = false;
      this.formSuccess = true;
      //recuperd les données du formulaire
      let nomHero = this.createHeroForm.get('nomHero').value; 
      //console.log(nomHero);
      let classeHero = this.createHeroForm.get('classeHero').value; 
      //console.log(classeHero);
      let armeHero = this.createHeroForm.get('armeHero').value; 
      //console.log(armeHero);
      //Affiche les données dans le tableau
      this.afficherHeroCreer(nomHero, classeHero, armeHero);
      //reset le formulaire
      this.createHeroForm.reset();
    }else{
      //afficher le message error
      this.formError = true;
      this.formSuccess = false;
    }
  }

  afficherHeroCreer(nom: string, classe: string, arme: string){
    this.hero = new Hero();
    this.hero.nom = nom;
    this.hero.classe = classe;
    this.hero.arme = arme;
    this.listHero.push(this.hero);
  }

  combattre(){
    if(this.listHero.length > 0){
      this.pasDeHeroCreer = false;
      //Envoi les héros créer à notre service
      this.heroService.majListHero(this.listHero);
      this.route.navigate(['/synthese']);
    }else{
      this.pasDeHeroCreer = true;
    }
  }

}
