import { Injectable } from '@angular/core';
import { IContact } from './contact';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  view(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/contacts/${id}`);
  }

  add(contact: IContact): Observable<any> {
    return this.http.post(`http://localhost:3000/api/contacts`, contact);
  }

  save(id: string, contact: IContact): Observable<any> {
    return this.http.post(`http://localhost:3000/api/contacts/${id}`, contact);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/contacts/${id}`);
  }
}
