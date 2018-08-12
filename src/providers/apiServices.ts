import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Promise_Instance } from 'firebase/app';
import { utilServices } from 'util';
import { Header } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class apiServices {
    agentRecord = {}
    public acctType;
    constructor(public http: Http) {
        console.log('Hello api services');
    }
 
}
