import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/modeles/monstre';
import { MonstreService } from 'src/app/services/monstre.service';

@Component({
  selector: 'app-synthese-monstre',
  templateUrl: './synthese-monstre.component.html',
  styleUrls: ['./synthese-monstre.component.scss']
})
export class SyntheseMonstreComponent implements OnInit {

  monstreList: Monstre[] = [];

  constructor(private monstreService: MonstreService) { }

  ngOnInit() {
    this.getMonstre();
  }

  getMonstre(){
    this.monstreList = this.monstreService.genererListMonstre();
  }
}
