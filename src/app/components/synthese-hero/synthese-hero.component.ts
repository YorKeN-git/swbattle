import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';
import { Hero } from 'src/app/modeles/hero';

@Component({
  selector: 'app-synthese-hero',
  templateUrl: './synthese-hero.component.html',
  styleUrls: ['./synthese-hero.component.scss']
})
export class SyntheseHeroComponent implements OnInit {
  heroList: Hero[];
  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.afficherHero();
  }

  afficherHero(){
    this.heroList = this.heroService.listHero;
    //console.log(this.heroList);
  }

}
