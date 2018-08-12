import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { utilServices } from '../../providers/util';
import {Events} from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

// this page is where the action is, chat activities get implemented here
export class ChatPage {
  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(
    public db: AngularFireDatabase,
    private event: Events,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private utils:utilServices
  ) {
      this.username = this.navParams.get('username');
      this._chatSubscription = this.db.list('/chat').subscribe( data => {
        this.messages = data;
        console.log(this.messages);
        for (let entry of this.messages) {
          if(entry["username"])
           var n = entry["username"].search("@");
           if (!entry["username"] || !entry["username"].length) { continue; }
           entry["username"]= entry["username"].slice(0, n);
      }
      }); 
    } 

    sendMessage() {
      this.db.list('/chat').push({
        username: this.username,
        message: this.message
      }).then( () => {
      }).catch( () => { 
        this.utils.presentAlert('Message sent Failure', 'Looks like something went wrong,\n check internet! ');
      });
      this.message = '';
    } 

    ionViewDidLoad() {
    }

    ionViewWillLeave(){
    }
    exit(){
      this.utils.localSave('login', false);
      this.utils.localSave('loginUser',null);
      this.navCtrl.setRoot(LoginPage);
      this.event.publish('user:logout');
  }
  }
