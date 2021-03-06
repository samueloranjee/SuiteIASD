import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MembroController} from '../../controllers/MembroController';

/**
 * Generated class for the MembroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membro',
  templateUrl: 'membro.html',
})
export class MembroPage {

  membro: MembroController;

  resultado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.membro = new MembroController();
    this.membro.enviar();
    this.membro.mostrar();
    this.membro.limpar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembroPage');
  }

}
