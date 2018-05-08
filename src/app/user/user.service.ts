import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import { User } from './user';

import "rxjs";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private _http:Http
  ) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this._http.get('/user')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
        this._http.post('/user', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  showUser(id) {
    return new Promise((resolve, reject) => {
        this._http.get('/user/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  updateUser(id, data) {
      return new Promise((resolve, reject) => {
          this._http.put('/user/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteUser(id) {      
      return new Promise((resolve, reject) => {
          this._http.delete('/user/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
  }


}
