import { Injectable } from '@angular/core';
import { Monstre } from '../modeles/monstre';

@Injectable({
  providedIn: 'root'
})
export class MonstreService {

  monstreList: Monstre[] = [];
  monstre: Monstre;

  //Listes des nom Masculin
  listNomM: string[] = ['Glusor Atumag', 'Urbua Aguim', 'Lugdog Badbamph', 'Shuzothmuk Ugdgan', 'Dumagdush Ugdubag' //5
                        ,'Umuo Khasrump', 'Grogonak Buzgrat', 'Uruzgob Rugod', 'Yargol Moghgan', 'Magumok Marakul'  //10
                        ,'Khashnag Ugrugash', 'Bumur Grambuk', 'Urbbagorn Uftug', 'Dumok Brokham', 'Gadburz Gambag', //15
                       'Garo Buzgorn', 'Bagron Durgg', 'Olfgnak Ruspok', 'Mukr Gorzdu', 'Umuh Agamrag', //20
                       'Othmagdush Loghrba', 'Malknarz Snagh', 'Duraamul Gharhakh', 'Magugakh Lagda', 'Urbamph Mogarkub', //25
                       'Yasolg Durggdub', 'Shelamul Muzgorn', 'Balgrol Agubul', 'Ogolob Mularbag', 'Oluagorn Ulfirag', //30
                       'Olpao Bhagamph', 'Nasrol Shatamph', 'Brubagorn Mogdrg', 'Dumish Borblam', 'Ghorrkul Magrkul', //35
                       'Bogrog Snazuf', 'Mahon Nolosh', 'Durul Orkgak', 'Olumrbash Shaknikh', 'Kofmorz Gulfuk', //40
                       'Maknbumol Murulfim', 'Garzrzob Lurkbog', 'Shurman Dulhnar', 'Shoo Urgbuk', 'Maknzol Ogdmba', //45
                       'Ugduothmuk Azobek', 'Dumug Marabak', 'Urzorn Borgakh', 'Lugfutto Bugarzuf', 'Groonk Glorrish',]; //50
                       
  //Listes des nom Féminin
  listNomF: string[] = ['Mogoga Ghothel','Ghobr Mashish','Bumphnakh Baroat','Volrzug Marabak','Graomalah Lumbrz',  //5
                        'Atudurz Borbrbush','Gaszob Gatuz','Batugar Ghart','Durzh Gholzag','Narur Maldush',  //10
                        'Uloakh Bonga','Umofim Snakh','Umoggash Coblbog','Shelr Bogaham','Ugakmpha Buronikh',  //15
                        'Gulfat Dugrg','Ushgak Atulug','Borfish Glukimph','Morba Agarzog','Borim Bagoshnar',  //20
                        'Basha Ulfak','Gulfurash Ghohug','Grazgash Skanhol','Sherz Bagotur','Lambha Rimprol',  //25
                        'Voltbug Gramag','Ghobn Brokdum','Lambamph Bumgham','Ulothnakh Orkuarn','Baghnakh Nolbek',  //30
                        'Urzotharz Mulaul','Shusha Aglgamph','Narrza Bagurak','Baturak Glukrak','Mora Usharku',  //35
                        'Mogalur Burou','Bashm Masoth','Gratdurash Loghgakh','Uglarz Durhug','Khaftharz Galump',]  //40
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
      this.monstre.hp = this.monstre.hpMax;
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
      this.monstre.hp = this.monstre.hpMax;
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
      this.monstre.hp = this.monstre.hpMax;
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
      this.monstre.hp = this.monstre.hpMax;
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
      this.monstre.hp = this.monstre.hpMax;
      this.monstre.def = 200;
      this.monstre.atk = 300;
      this.monstre.iconPath = "./assets/images/icon_boss/boss.jpg";
      this.monstreList.push(this.monstre);
    }
  }

  genererNomMonstreM(){
    let value = Math.floor(Math.random() * Math.floor(49));
    let nomM = this.listNomM[value];
    return nomM;
  }

  genererNomMonstreF(){
    //WIP Generer nom F
    let value = Math.floor(Math.random() * Math.floor(39));
    let nomF = this.listNomF[value];
    return nomF;
  }
}
