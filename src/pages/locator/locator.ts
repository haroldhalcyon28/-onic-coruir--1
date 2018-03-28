import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html',
})
export class LocatorPage {

  action : string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.action = this.navParams.get('action');
  }

}
