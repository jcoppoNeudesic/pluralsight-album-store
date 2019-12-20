import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get<Object>(this._albumUrl)
  }
}
