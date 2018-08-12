import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
import {apiServices} from '../../providers/apiServices';
import {utilServices} from '../../providers/util';
//import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg = {
    email:'',
    password:''
  } 

  responseData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,public utils:utilServices, 
              private afAuth: AngularFireAuth,
              private apiServices:apiServices,
             // private camera:Camera
            ) {
                //this.getAccTypes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  lunchCam(){
    this.utils.cameraAction();
  } 
  displayAlert(alertTitle,alertSub){
    let theAlert = this.alertCtrl.create({
      title:alertTitle,
      subTitle:alertSub,
      buttons: ['ok']
    });
    theAlert.present();
  }

  registerAccount(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.reg.email,this.reg.password)
    .then((data)=>{
      this.utils.presentAlert('Registrations Successful!', 'Login With User ID ' + this.reg.email);
    })
    .catch(error =>{
      this.utils.presentAlert('Registrations Error!', error.message);
    });
  }

  takePhoto() {
   /* const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 600,
        targetHeight: 600,
        saveToPhotoAlbum: false
    };
    
    this.camera.getPicture(options).then(
        imageData => {
          // this.base64Image = "data:image/jpeg;base64," + imageData;
          // this.photos.push(this.base64Image);
          // this.photos.reverse();
          // this.sendData(imageData);
       },
       err => {
         console.log(err);
       }
    );*/
    }
    goToLogin(){
      this.navCtrl.setRoot(LoginPage);
    }
}
