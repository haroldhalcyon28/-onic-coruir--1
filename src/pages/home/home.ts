import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public AlertCtrl: AlertController ) {
    
  }

  locate(param){
    this.navCtrl.push('LocatorPage', { action : param })
  }


  showActionSheet(){
    this.AlertCtrl.create({
      message : 'long-pressed'
    }).present();
  }

   

}
