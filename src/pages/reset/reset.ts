import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { utilServices } from '../../providers/util';
import {LoginPage} from '../login/login';
/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})

export class ResetPage {
  email:string;
  constructor(public navCtrl: NavController, private navParams: NavParams,
    private viewCtrl:ViewController,private afAuth: AngularFireAuth,
    public utils: utilServices,) {

  }
  resetPassword(){ 
    this.afAuth.auth.sendPasswordResetEmail(this.email).then((data) => {
           this.utils.presentAlert('Reset Completed!', "please check your mail");
    })
    .catch(error => {
      console.log(error);
      this.utils.presentAlert('Reset Failed!', error.message);
       //this.navCtrl.setRoot(LoginPage);
    });

  }

  signIn() {
    this.navCtrl.setRoot(LoginPage);
  }

}
