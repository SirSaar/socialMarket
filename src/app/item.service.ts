import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable()
export class ItemService {
  private itemApi = '/api/item/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
  };

  constructor(private http:HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.itemApi);
  };
  
  saveItem(item): Observable<any> {
    return this.http.post<any>(this.itemApi,item,this.httpOptions);
    //todo: add trader name and id
  }
  
  getItem(id): Observable<any> {
    return this.http.get<any>(this.itemApi+id);
  }

  updateItem(id, item): Observable<any> {
    return this.http.put<any>(this.itemApi+id, item);
  }

  deleteItem(id): Observable<any> {
    return this.http.delete(this.itemApi+id);
  }

}

