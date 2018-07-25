import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ministerio } from '../../controllers/MinisterioController';

/**
 * Generated class for the MinisterioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministerio',
  templateUrl: 'ministerio.html',
})
export class MinisterioPage {

  ministerio: Ministerio;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ministerio = new Ministerio("Ministerio da Musica","Fazer Louvor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinisterioPage');
  }

}
