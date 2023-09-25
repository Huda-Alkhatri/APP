import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  regURL = "http://localhost:3000/users"
  URL = "http://localhost:3000/resto"
  constructor(private _http: HttpClient) { }
  getRestoList() {
    return this._http.get(this.URL);
  }

  addResto(data: any) {
    return this._http.post(this.URL, data);
  }
  deleteResto(Id: any) {
    return this._http.delete(`${this.URL}/${Id}`)
  }
  getCurrentData(Id: any) {
    return this._http.get(`${this.URL}/${Id}`)
  }
  updateResto(Id: any, data: any) {
    return this._http.put(`${this.URL}/${Id}`, data)
  }
  createUser(data: any) {
    return this._http.post(this.regURL, data);
  }
  loginUser(Gmail: string, password: string) {
    return this._http.post(this.regURL, {
      Gmail: Gmail,
      password: password
    });
  }

}