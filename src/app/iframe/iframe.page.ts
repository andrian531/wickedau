import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage  {

  @Input() name: string;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    console.log(navParams.get('name'));
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}