import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  url:any = 'https://portfoliopratiksha.onrender.com/api/Pfeedback'

  // get
  getFeedback(){
    return this.http.get(this.url)
  }

  // getbyid
  getFeedbackbyid(id:any){
    return this.http.get(this.url + `/byid/${id}`)
  }

  // post
  postFeedbackontact(value:any){
    return this.http.post(this.url,JSON.stringify(value),{headers:{"Content-Type":"application/json"}})
  }

  // put
  putFeedback(value:any){
    return this.http.put(this.url + `/${value._id}`,JSON.stringify(value),{headers:{"Content-Type":"application/json"}})
  }

  // delete
  deleteFeedback(_id:any){
    return this.http.delete(this.url + `/${_id}`,{headers:{"Content-Type":"application/json"}})
  }
}
