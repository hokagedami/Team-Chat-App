//import all required injections
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResetPage } from '../pages/reset/reset';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { apiServices } from '../providers/apiServices';
import { utilServices } from '../providers/util';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Push } from '@ionic-native/push';

//set backend config details
const firebaseAuth = {
  apiKey: "AIzaSyBJ3Z7X8K3sWm6qJQnBEcljOQLciAYDeTw",
  authDomain: "teamchatapp-hokage.firebaseapp.com",
  databaseURL: "https://teamchatapp-hokage.firebaseio.com",
  projectId: "teamchatapp-hokage",
  storageBucket: "",
  messagingSenderId: "544737722118" 
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    LoginPage,
    ResetPage,
    HomePage,
    RegisterPage,
    //AngularFireModule.initializeApp(environment.firebase),

  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetPage,
    ChatPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    apiServices,
    Push,
    utilServices,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
