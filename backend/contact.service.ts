import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  url:any = 'https://portfoliopratiksha.onrender.com/api/Pcontact'

  // get
  getContact(){
    return this.http.get(this.url)
  }

  // getbyid
  getContactbyid(id:any){
    return this.http.get(this.url + `/byid/${id}`)
  }

  // post
  postContact(value:any){
    return this.http.post(this.url,JSON.stringify(value),{headers:{"Content-Type":"application/json"}})
  }

  // put
  putContact(value:any){
    return this.http.put(this.url + `/${value._id}`,JSON.stringify(value),{headers:{"Content-Type":"application/json"}})
  }

  // delete
  deleteContact(_id:any){
    return this.http.delete(this.url + `/${_id}`,{headers:{"Content-Type":"application/json"}})
  }
}
